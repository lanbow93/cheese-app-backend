// Imports
const express = require("express")
require("dotenv").config();
const morgan = require("morgan")
const cors = require("cors")
const cheeseRouter = require("./controllers/cheese")

// Application object
const app = express()

// Middleware
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use("/cheeses", cheeseRouter);


// Route to test
app.get("/", (request, response) => {
    response.send("Server is operational")
})

// App Listener
const PORT = process.env.PORT || 7357
app.listen(PORT, (request, response) => {
    console.log(`Listening on port: ${PORT}`)
})