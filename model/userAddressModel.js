const mongoose = require('mongoose');

const schema = new mongoose.Schema({
        address:{
            type: String,
            required: [true, 'Sorry something went wrong'],
            trim: true
        }
});

const authAddress = mongoose.model('address', schema);

module.exports=authAddress;