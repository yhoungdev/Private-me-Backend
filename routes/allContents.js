const mongoose = require('mongoose');
const express = require('express');
const contens = require('../model/createPost')
const router= express.Router();

router.get('/post', async ( req , res ) => {
    contens.find({} , ( err , result ) => {
            if(err) {
                res.send(err);
            }
    })
})


module.exports = router;