const CrudService = require('./crud-service')
const {AirportRepository} = require('../respository/index')

class AirportService extends CrudService{
  constructor(){
    const airplaneRepository = new AirportRepository()
    super(airplaneRepository)
  }
}

module.exports = AirportService