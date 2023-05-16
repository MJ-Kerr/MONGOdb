const express = require("express");
const app = express();

//middleware
app.use(express.json(), express.urlencoded({ extended: true }));

// load .env variables
console.log('Loading environment variables...🕐🕑🕒🕓');
require('dotenv').config();
const PORT = process.env.PORT
console.log(PORT)

// import the file to run the server
require("./config/mongoose.config")

// routes to run
const allMyJokeRoutes = require("./routes/joke.routes")
allMyJokeRoutes(app);

app.listen(PORT, () => console.log(` 🎈🎈🎈 Server up on port ${PORT} 🎈🎈🎈`))