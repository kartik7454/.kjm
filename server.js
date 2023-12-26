const express = require('express')
const cors = require ('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const eventRoutes = require('./routes/eventRoutes')

app.use(cors())
//express app
const app = express()

// middelware

app.use (express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//routes
app.use('/',eventRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{ //listen  for request
    app.listen(process.env.PORT,()=>{
     console.log("listening at port 4000! and connected to db")})
})
.catch((error)=>{
    console.log(error)
})
