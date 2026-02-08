const mongoose = require("mongoose")
const colors = require("colors")

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connect to Database".green)
}

module.exports = connectDB