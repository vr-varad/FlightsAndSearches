const {Flight} = require('../models/index')
const {Op} = require('sequelize')


class FlightRepository{
  async createFlight(data){
    try {
      const flight = await Flight.create(data)
      return flight
    } catch (error) {
      console.log('Something went Wrong inside the repository level')
      throw {error}
    }
  }
  async getFlight(flightId){
    try {
      const flight = await Flight.findByPk(flightId)
      return flight;
      
    } catch (error) {
      console.log('Something went Wrong inside the repository level')
      throw {error}
    }
  }
  #createFilter(data){
    const filter = {}
    if(data.ArrivalCityId){
      filter.ArrivalCityId = data.ArrivalCityId
    }
    if(data.departureAirportId){
      filter.departureAirportId = data.departureAirportId
    }
    if(data.minPrice && data.maxPrice){
      Object.assign(filter,{[Op.and]:[
        {price : {[Op.lte]: data.minPrice}},
        {price : {[Op.gte]: data.maxPrice}}
      ]})
    }else{
      if(data.minPrice){
      Object.assign(filter,{price : {[Op.lte]: data.minPrice}})
    }if(data.maxPrice){
      Object.assign(filter,{price : {[Op.gte]: data.maxPrice}})
    }
    }
    console.log(filter)
    return filter
  }
  async getAllFlight(filter){
    try {
      const filterObject = this.#createFilter(filter)
      const flight = await Flight.findAll({
        where: filterObject
      })
      return flight;
      
    } catch (error) {
      console.log('Something went Wrong inside the repository level')
      throw {error}
    }
  }
}


module.exports = FlightRepository