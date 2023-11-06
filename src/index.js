const express = require('express')

const {PORT} = require('./config/serverConfig')

const setupAndStartServer = async ()=>{

  
  const app = express()
  const port = 3000
  
  app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`)
  })
}
  
setupAndStartServer()