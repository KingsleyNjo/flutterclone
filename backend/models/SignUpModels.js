const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },

    tradingname:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    country:{
        type:String,
        required:true
    },

    words:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.new
    }
})

module.exports = mongoose.model('mytable', signUpTemplate);

 