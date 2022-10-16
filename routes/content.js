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


//get all contents data 
router.get('/post' , ( req , res ) => {
   postContent.find({} , ( err, data ) => {
      if(err) {
         res.send(err)
      } else {
         res.send(data)
      }
   })
})
module.exports = router
