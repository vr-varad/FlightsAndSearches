const {CityRepository} = require('../respository/index')



class CityService{
  constructor(){
    this.cityRepository = new CityRepository()
  }

  async createCity(data){
    try{
      const city = await this.cityRepository.createCity(data)
      return city
    }
    catch(err){
      console.log('Something went wrong in the service layer')
      throw {err}
    }
  }

  async deleteCity(cityId){
    try{
      const response = await this.cityRepository.deleteCity(cityId)
      return response
    }
    catch(err){
      console.log('Something went wrong in the service layer')
      throw {err}
    }
  }

  async updateCity(cityId, data){
    try{
      const response = await this.cityRepository.updateCity(cityId,data)
      return response
    }
    catch(err){
      console.log('Something went wrong in the service layer')
      throw {err}
    }
  }

  async getCity(cityId){
    try{
      const response = await this.cityRepository.getCity(cityId)
      return response
    }
    catch(err){
      console.log('Something went wrong in the service layer')
      throw {err}
    }
  }

  async getAllCities(filter){
    try {
      const cities = await this.cityRepository.getAllCities({name: filter.name})
      return cities
    } catch (error) {
       console.log('Something went wrong in the service layer')
      throw {error}
    }
  }

  async getCityAirports(cityId){
    try {
      const airports = await this.cityRepository.getCityAirports(cityId)
      return airports
      
    } catch (error) {
       console.log('Something went wrong in the service layer')
      throw {error}
    }
  }
}



module.exports = CityService