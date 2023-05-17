const express = require("express");
const cors = require('cors');
const app = express();

//middleware
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

// load .env variables
console.log('Loading environment variables...🕐🕑🕒🕓');
require('dotenv').config();
const PORT = process.env.PORT
// console.log(PORT)

// connects to the DB
require("./config/config")

// routes 
require("./routes/product.routes")(app);

app.listen(PORT, () => console.log(` 🎈🎈🎈 Server up on port ${PORT} 🎈🎈🎈`))