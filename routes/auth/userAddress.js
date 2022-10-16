const mongoose = require('mongoose');
const express = require('express');
const address = require('../../model/userAddressModel');

const router = express.Router();

router.post('/auth/address' , ( req , res ) => {
    address.create(req.body)
    .then( response => {
       res.send(response)
    }).catch( err => {
       res.send(err)
    })
})

module.exports = router;