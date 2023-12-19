const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({

title:{
    type:String,
    required:true
},
startd:{type:Date,
    required:true},
endd:{type:Date,
    required:true},
description:{type:String,
required:true},

link:{type:String,
required:true},

image:{type:String,
    required:true},

tags:{type:String,
        required:true}

},{timestamps:true})




    

module.exports = mongoose.model("event",eventSchema)