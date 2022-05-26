// IMPORT YOUR DEPENDENCIES
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

// CONNECT TO MONGODB
require("./config/mongoose.config")

// CONFIGURE YOUR EXPRESS
app.use(cors()) // ALLOWS FOR REACT & EXPRESS TO COMMUNICATE
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// ATTACH ROUTES TO YOUR EXPRESS SERVER
const petRoutes = require("./routes/pet.route")
petRoutes(app)

// RUN YOUR EXPRESS SERVER
app.listen(port, () => console.log(`EXPRESS SERVER LISTENING: ${port}`) );