const mongoose = require('mongoose');
const express = require('express');


const route = express.Router();


const schema = new  mongoose.Schema({
    name: {

        type: String,
        required: true
        
    },

    status : {
        type: Boolean
    }


});

const Communinty = mongoose.model('community' ,  schema);
module.exports= Communinty;