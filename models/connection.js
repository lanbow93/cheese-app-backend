const mongoose = require("mongoose")
require("dotenv").config()
const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

module.exports = mongoose