const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    }
});

const community = mongoose.model('Community', schema);
module.export= community