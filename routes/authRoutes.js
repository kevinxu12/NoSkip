const passport = require('passport');
const base64url = require('base64url');
module.exports = app => {
app.get(
    '/auth/google', 
    passport.authenticate(
        'google', 
        {
            scope: ['profile', 'email']
        }
    )
);

app.get(
    '/auth/google/grader', 
    passport.authenticate(
        'google', 
        {
            scope: ['profile', 'email'],
            state: base64url(JSON.stringify({blah: 'test'}))
        }
    )
);

app.get('/auth/google/callback', 
passport.authenticate('google'),
(req, res) => {
    if(req.user.graderID) {
        res.redirect('/graders');
    } else {
        res.redirect('/surveys');
    }
});


app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
}); 

app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};