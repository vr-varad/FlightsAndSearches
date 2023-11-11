const {FlightRepository,AirplaneRepository} = require('../respository/index')
const {compareTime} = require('../utils/helper')

class FlightService{

  constructor(){
    this.flightRepository = new FlightRepository()
    this.airplaneRepository = new AirplaneRepository()
  }
  async createFlight(data){
    try {
      if(!compareTime(data.arrivaltime,data.departureTime)){
        throw{error: 'Arrival time connot be less than departure time.'}
      }
      const airplane = await this.airplaneRepository.getAirplane(data.airplaneId)
      const flight = await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity})
      return flight

      
    } catch (error) {
      console.log('Something went wrong in the service layer')
      throw {error}
    }
  }

  async getFlights(flightId){
    try {
      const flights =await this.flightRepository.getFlight(flightId)
      return flights
    } catch (error) {
       console.log('Something went wrong in the service layer')
       throw {error}
    }
  }

  async getAllFlights(data){
    try {
      const flights =await this.flightRepository.getAllFlight(data)
      console.log(data)
      return flights
    } catch (error) {
       console.log('Something went wrong in the service layer')
       throw {error}
    }
  }
}

module.exports = FlightService