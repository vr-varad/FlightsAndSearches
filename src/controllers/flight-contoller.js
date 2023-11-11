const {FlightService} = require('../services/index')



const flightService = new FlightService()


const create = async (req,res)=>{
  try {
    const flight = await flightService.createFlight(req.body)
    return res.status(201).json({
      data: flight,
      success: true,
      message: 'Successfully created a flight',
      err: null
    })
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to create a flight',
      err: {error}
    })
  }
}
const getFlight = async (req,res)=>{
  try {
    const flight = await flightService.getFlights(req.params.id)
    return res.status(201).json({
      data: flight,
      success: true,
      message: 'Successfully got a flight',
      err: null
    })
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to get a flight',
      err: {error}
    })
  }
}
const getAllFlights = async (req,res)=>{
  try {
    const flights = await flightService.getAllFlights(req.query)
    return res.status(201).json({
      data: flights,
      success: true,
      message: 'Successfully fetched the flight',
      err: null
    })
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to get a flight',
      err: {error}
    })
  }
}


module.exports = {
  create,
  getFlight,
  getAllFlights
}