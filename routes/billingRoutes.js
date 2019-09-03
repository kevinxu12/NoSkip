const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        if(!req.user) {
            return res.status(401).send({ error: "You need to have logged in lmao"});
        }
        const charge = await stripe.charges.create({
            amount: 100,
            currency: 'usd',
            description: '1 dollar for 1 credit',
            source: req.body.id
        });
        
        req.user.credits += 1;
        const user = await req.user.save();
        res.send(user);
    });
};