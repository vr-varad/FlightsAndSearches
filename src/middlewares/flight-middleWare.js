const validateCreateFlight = (req,res,next) => {
  if(
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.ArrivalCityId ||
    !req.body.arrivaltime ||
    !req.body.departureTime ||
    !req.body.price 
  ){
    return res.status(400).json({
      data: [],
      err: true,
      message: "incomplete mandatory data",
      success: false
    })
  }
  next()
}

module.exports = {
  validateCreateFlight
}