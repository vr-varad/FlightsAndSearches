const express = require('express')
const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig')
const CityRepository = require('./respository/city-repository')

const setupAndStartServer = async ()=>{

  
  const app = express()
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  
  app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`)
    const city = new CityRepository()
    city.updateCity( 2,{ name: "Lucknow"})
  })
}
  
setupAndStartServer()