const express = require('express');

const router = express.Router();


router.post( '/content' , async ( req , res ) => {


     try {

     }  catch( error ) {
        res.status(500).send( error.message );
     }

});
