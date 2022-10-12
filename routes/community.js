const express = require('express');
const mongoose = require('mongoose');
const community = require('../model/community.model')
const router = express.Router();


router.post('/createCommunity' , ( req , res ) => {

    community.create(req.body).then( response => {
        res.status(200).send(response)
    }).catch(err => res.status(500).send(err));

})



module.exports = router;