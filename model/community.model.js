const mongoose = require('mongoose');
const express = require('express');


const route = express.Router();


const schema = new  mongoose.Schema({
    name: {

        type: String,
        required: true
        
    },

    status : {
        type: Boolean,
        required: [true, 'There must be a status']
    },
    image: {
        type: String,
    }


});

const Communinty = mongoose.model('community' ,  schema);
module.exports= Communinty;