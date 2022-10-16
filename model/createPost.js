const mongoose = require('mongoose');

const schema = mongoose.Schema;

const content = new schema({
    post : {
        type: String,
        required: [ true , 'required']
    },
    voice: String,
    fileUrl: String,
    
});

const PostContent = mongoose.model('Content' , content);
module.exports =  PostContent;
