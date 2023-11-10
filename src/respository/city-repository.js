const {Op, sequelize} = require('sequelize')

const {City, Airport} = require('../models/index')

class CityRepository{
  async createCity({name}){
    try{
      if(Array.isArray(name)){
        const city = await City.bulkCreate(name.map((n)=>{
          return {name: `${n}`}
        }))
        return city
      }
      const city = await City.create({name})
      return city;
    }catch(err){
      throw {err}
    }
  }
  async deleteCity(cityId){
    try{
      await City.destroy({
        where:{
          id: cityId
        }
      })

    }catch(err){
      throw {err}
    }
  }

  async updateCity(cityId, data){
    try{
      const city = await City.update(data,{
        where : {
          id: cityId
        }
      })
      return city
    }catch(err){
      console.log('There is an err')
      throw {err}
    }
  }

  async getCity(cityId){
    try{
      const city = await City.findByPk(cityId)
      return city
    }catch(err){
      console.log('Something went Wrong inside the repository level')
      throw {err}
    }
  }

  async getAllCities(filter){
    try {
      if(filter.name){
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: `${filter.name}`
            }
          }
        })
        return cities
      }
      const cities = await City.findAll()
      return cities
    } catch (error) {
      console.log('Something went Wrong inside the repository level')
      throw {error}
    }
  }

  async getCityAirports(cityId){
    try {
      if(process.env.SYNC_DB){
        db.sequelize.sync({alter: true})
      }
      const city = await City.findOne({
        where:{
          id: cityId
        }
      })
      const airports = await city.getAirports()
      return airports
      
    } catch (error) {
      console.log('Something went Wrong inside the repository level')
      throw {error}
      
    }
  }
}

module.exports = CityRepository