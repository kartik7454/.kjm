const express = require('express')
const {getEvents,createWorkout,createFavWorkout,getFavEvents,delFavEvents}= require('../controllers/eventControllers')
const router = express.Router()


//get all events
router.get('/events',getEvents)
//post a event
router.post('/events',createWorkout )

router.post('/FavEvents',createFavWorkout )

router.get('/FavEvents',getFavEvents )

router.delete('/FavEvents/:id',delFavEvents )

module.exports = router