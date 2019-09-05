const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');
const Grader = mongoose.model('graders');
let callBackURL = '/auth/google/callback';
passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    if(user) {
      done(null, user);
    } else {
      const grader = await Grader.findById(id);
      done(null, grader);
    }
  });

passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: callBackURL,
    proxy: true,
    passReqToCallback: true
}, async (req, accessToken, refreshToken, profile, done) => {
    const isGrader = req.query.state;
    console.log(isGrader);
    let existingUser = null;
    if(!isGrader) {
      existingUser = await User.findOne({googleId : profile.id})
      if(existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ googleId: profile.id}).save();
      done(null, user);
    } else {
      existingUser = await Grader.findOne({googleId : profile.id})
      if(existingUser) {
        return done(null, existingUser);
      }
      const user = await new Grader({googleId: profile.id, graderID: 'true'}).save();
      done(null, user);
      }
    }
   
}));