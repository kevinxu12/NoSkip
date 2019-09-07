const mongoose = require('mongoose');
const { Schema } = mongoose;

const classSchema = new Schema({
    department: String,
    number: Number,
    timeStart: String,
    timeEnd: String,
    meetingDays: String,
    students: [String]
});

mongoose.model('classes', classSchema);