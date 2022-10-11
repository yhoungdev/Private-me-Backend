const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    content: {
        type: String
    }
});


const comment = mongoose.model('Comment', schema);