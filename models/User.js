const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    email: String,
    credits: { type: Number, default: 0},
    verifiedAttendance: Number,
    unverifiedAttendance: Number
});

mongoose.model('users', userSchema);