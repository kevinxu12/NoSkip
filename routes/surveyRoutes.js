const mongoose = require('mongoose');
const requireCredits = require('../middlewares/requireCredits');
const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const _ = require('lodash');
const { Path }= require('path-parser');
const { URL } = require('url');

const Survey = mongoose.model('surveys');
const User = mongoose.model('users');

module.exports = app => {
    app.get('/api/surveys', async (req, res) => {
        const surveys = await Survey.find({_user: req.user}).select({recipients: false});
        res.send(surveys);
    });


    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send("Thanks for Answering!");
    })

    app.post('/api/surveys/webhooks', (req, res) => {
        const p = new Path('/api/surveys/:surveyId/:choice');
        console.log("HI");
        _.chain(req.body)
        .map(({email, url }) => {
            const match = p.test(new URL(url).pathname);
            if(match) {
                console.log("match");
                return {
                    email,
                    surveyId: match.surveyId,
                    choice: match.choice
                };
            }
        })
        .compact()
        .uniqBy('email', 'surveyId')
        .each(({ surveyId, email, url, choice })=> {
            Survey.updateOne(
                {
                  _id: surveyId,
                  recipients: {
                    $elemMatch: { email: email, responded: false }
                  }
                },
                {
                  $inc: { [choice]: 1 },
                  $set: { 'recipients.$.responded': true },
                  lastResponded: new Date()
                }
            ).exec();
        })
        .value();
        _.map(req.body, async ({email, url}) => {
            const match = p.test(new URL(url).pathname);
            if(match) {
                const survey = await Survey.findOne({
                    _id: match.surveyId
                });
                let existingUser = await User.findOne({email: email});
                if(existingUser) {
                    if(match.choice.toLowerCase() !== survey.answer.toLowerCase()) {
                        console.log("adding");
                        existingUser.unverifiedAttendance += 1;
                    } else {
                        existingUser.verifiedAttendance += 1;
                    }
                    existingUser.save();
                }
        }
        });
        res.send({});
        // might need some logic about correctness
    })

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients, answer} = req.body;
        const survey = new Survey({
            title,
            subject,
            body,
            answer,
            recipients: recipients.split(',').map(email => ({email: email.trim()})),
            _user: req.user.id,
            dateSent: Date.now()
        });

        //send the email
        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
            await mailer.send();
            await survey.save();
            //req.user.credits -= 1;
            const user = await req.user.save();
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });
}; 