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

// CONNECT ROUTES
const authorRoutes = require("./routes/author.route")
authorRoutes(app)

// START EXPRESS SERVER
app.listen(port, () => console.log(`EXPRESS SERVER LISTENING: ${port}`) );