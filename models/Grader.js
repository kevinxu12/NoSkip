const mongoose = require('mongoose');
const { Schema } = mongoose;

const graderSchema = new Schema({
    googleId: String,
    graderID: String
});

mongoose.model('graders', graderSchema);