const {CityService} = require('../services/index')
const cityService = new CityService()
const create = async (req,res)=>{
  try{
    const city  = await cityService.createCity(req.body)
    return res.status(201).json({
      data: city,
      success: true,
      message : 'Successfully generated',
      err: {}
    })
  }catch(error){
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to create a city',
      err: {error}
    })
  }
}
const destroy = async (req,res)=>{
  try{
    const response  = await cityService.deleteCity(req.params.id)
    return res.status(200).json({
      data: response,
      success: true,
      message : 'Successfully deleted a city',
      err: {}
    })
  }catch(error){
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to delete the city',
      err: {error}
    })
  }
}
const update = async (req,res)=>{
  try{
    const response  = await cityService.updateCity(req.params.id, req.body)
    return res.status(200).json({
      data: response,
      success: true,
      message : 'Successfully updated a city',
      err: {}
    })
  }catch(error){
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to update the city',
      err: {error}
    })
  }
}
const get = async(req,res)=>{
  try{
    const response  = await cityService.getCity(req.params.id)
    return res.status(201).json({
      data: response,
      success: true,
      message : 'Successfully generated',
      err: {}
    })
  }catch(error){
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to get a city',
      err: {error}
    })
  }
}

const getAll = async(req,res)=>{
  try{
    const response  = await cityService.getAllCities(req.query)
    return res.status(201).json({
      data: response,
      success: true,
      message : 'Successfully generated',
      err: {}
    })
  }catch(error){
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to get a city',
      err: {error}
    })
  }
}
const getAirports = async (req,res)=>{
   try{
    const response  = await cityService.getCityAirports(req.params.id)
    return res.status(201).json({
      data: response,
      success: true,
      message : 'Successfully generated',
      err: {}
    })
  }catch(error){
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to get an airport',
      err: {error}
    })
  }

}

module.exports = {
  create,update,destroy,get,getAll,getAirports
}