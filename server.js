const app = require("./src/app.js")
const colors = require("colors")
const connectDB = require("./src/db/db.js")

connectDB();



app.listen(3000, () => {
    console.log("Server is running at port 3000".blue)
})