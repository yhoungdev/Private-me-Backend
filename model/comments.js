const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    content: {
        type: String,
        required: [true , 'Comment cant be empty']
    },
});


const comment = mongoose.model('Comment', schema);