const mongoose = require('mongoose')

const Schema = mongoose.Schema

const favEventSchema = new Schema({

    title:{
        type:String,
        required:true
    },
    
    link:{type:String,
    required:true},
    
    image:{type:String,
        required:true}
    
    
    
    })
    

module.exports = mongoose.model("favEvent",favEventSchema)