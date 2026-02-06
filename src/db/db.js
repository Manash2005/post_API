const mongoose = require("mongoose")
const colors = require("colors")

async function connectDB(){
    await mongoose.connect("mongodb+srv://Manash:bcyq3u6hQBzap4sB@cluster0.ouweza9.mongodb.net/posts")
    console.log("Connect to Database".green)
}

module.exports = connectDB