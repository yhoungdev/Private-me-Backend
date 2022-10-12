const express = require('express');
const postContent = require('../model/createPost');
const router = express.Router();



router.post('/post' , async ( req , res ) => {
      postContent.create(req.body)
      .then( response => {
         res.send(response)
      }).catch( err => {
         console.log('error')
      })
     
     

});

module.exports = router
