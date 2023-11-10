const {Airplane} = require('../models/index')


class AirplaneRepository {
  async getAirplane(planeId){
    try {
      const airplane = await Airplane.findOne({
        where: {
          id: planeId
        }
      })
      return airplane
    } catch (error) {
      console.log('Something went Wrong inside the repository level')
      throw {error}
    }
  }
}

module.exports = AirplaneRepository