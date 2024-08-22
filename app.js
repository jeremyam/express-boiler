const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const errorHandler = require("./middleware/errorHandler")
const routes = require("./routes")
const config = require("./config/config")

const app = express()

// Middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/", routes)

// Error handling middleware
app.use(errorHandler)

module.exports = app
