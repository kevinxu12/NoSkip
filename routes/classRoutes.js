const mongoose = require('mongoose');
const requireCredits = require('../middlewares/requireCredits');
const requireLogin = require('../middlewares/requireLogin');


const Class = mongoose.model('classes');
module.exports = app => {
    app.post('/classes/new', requireLogin, requireCredits, async (req, res) => {
        const { department, number, timeStart, timeEnd, meetingDays} = req.body;
        const existingClass = await Class.findOne({department: department, number: number});
        const studentsArray  = [req.user.email];
        if(!existingClass) {
            new Class({
                department,
                number,
                timeStart,
                timeEnd,
                meetingDays,
                studentsArray
            }).save();
        } else {
            existingClass.students = existingClass.students.concat([req.user.email]);
        }
        res.user.credits -= 1;
        const user = await req.user.save();
        res.send(user);   
    });
}; 