const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



const app = express();

app.use(cors());
app.use(express.json());


//connect to mongo db
const url = process.env.URL
mongoose.connect( url , {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then ( () => console.log('db connected successfully'))
.catch( error => console.log(error))

//listen to server 
app.listen( 3001 , ()=> console.log('listening on port 3001'))
