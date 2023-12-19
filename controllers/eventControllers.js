const Event = require ('../models/eventModel')
const favEvent = require ('../models/favEventModel')
const mongoose = require('mongoose')


//get all workout
const getEvents = async(req,res)=>{
    const event =await Event.find({}).sort({createdAt:-1})
    res.status(200).json(event)
}

//post a workout
const createWorkout = async (req,res)=>{

    const {title,startd,endd,description,link,image,tags} = req.body

try{
const event =  await Event.create({title,startd,endd,description,link,image,tags})
res.status(200).json(event)
}
catch(error){
    res.status(400).json({error:error.message})
}
}
////////////////////////////////////////
const createFavWorkout = async(req,res)=>{

    const {title,link,image} = req.body

try{
const event =  await favEvent.create({title,link,image})
res.status(200).json(event)
}
catch(error){
    res.status(400).json({error:error.message})
}
}
    
const getFavEvents = async(req,res)=>{
    const event =await favEvent.find({}).sort({createdAt:-1})
    res.status(200).json(event)
}

const delFavEvents = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout                                                                                                                                                                                                                                                                                                             '})
    }
    const workout = await favEvent.findOneAndDelete({_id:id})

    if (!workout){
        return res.status(404).json({error : 'no such workout'})
   }
   res.status(200).json(workout)
}



module.exports={getEvents,createWorkout,createFavWorkout,getFavEvents,delFavEvents}