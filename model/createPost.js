const mongoose = require('mongoose');

const schema = mongoose.schema;

const content = new schema({
    post : String,
    attatchment: String,
});

const post = mongoose.model('Content' , content);
module.export =  post;