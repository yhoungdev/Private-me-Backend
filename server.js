const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contents = require('./routes/content');

const communities = require('./routes/community');
const address = require('./routes/auth/userAddress')
const app = express();
require('dotenv').config();






app.use(cors());
app.use(express.json());



//use apis 
app.use('/api', contents);

app.use('/api' , communities);
app.use('/api', address);
//get all users



//connect to mongo db
const url = process.env.URL
mongoose.connect( url , {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then ( () => console.log('db connected successfully'))
.catch( error => console.log(error))

//listen to server 
app.listen( 5000 , ()=> console.log('listening on port 5000'))
