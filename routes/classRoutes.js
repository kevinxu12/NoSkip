const mongoose = require('mongoose');
const requireCredits = require('../middlewares/requireCredits');
const requireLogin = require('../middlewares/requireLogin');
const Class = mongoose.model('classes');


module.exports = app => {
    app.post('/api/classes', requireLogin, requireCredits, async (req, res) => {
        const { department, number, timeStart, timeEnd, meetingDays} = req.body;
        const existingClass = await Class.findOne({department: department, number: number});
        const studentsArray  = [req.user.email];
        console.log(studentsArray);
        if(!existingClass) {
            new Class({
                department,
                number,
                timeStart,
                timeEnd,
                meetingDays,
                students: studentsArray,
            }).save();
        } else {
            const isAlreadyIn = existingClass.students.includes(req.user.email);
            if(!isAlreadyIn) {
                existingClass.students = existingClass.students.concat(studentsArray);
                existingClass.save();
            }
        }
        req.user.creds -= 1;
        const user = await req.user.save();
        res.send(user);   
    });
}; 