const express = require('express')

const {FlightMiddleWare} = require('../../middlewares/index')

const CityControllers = require('../../controllers/city-controller')
const FlightControllers = require('../../controllers/flight-contoller')
const AirportController = require('../../controllers/airport-controller')
const router = express.Router()


router.post('/city',CityControllers.create)
router.delete('/city/:id',CityControllers.destroy)
router.get('/city/:id',CityControllers.get)
router.patch('/city/:id',CityControllers.update)
router.get('/city/airport/:id',CityControllers.getAirports)
router.get('/city',CityControllers.getAll)
router.post('/flights',FlightMiddleWare.validateCreateFlight,FlightControllers.create)
router.get('/flights/:id',FlightControllers.getFlight)
router.get('/flights',FlightControllers.getAllFlights)
router.post('/airports',AirportController.create)
module.exports = router