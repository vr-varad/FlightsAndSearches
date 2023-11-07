const express = require('express')
const CityControllers = require('../../controllers/city-controller')
const router = express.Router()


router.post('/city',CityControllers.create)
module.exports = router