const express = require("express");
const app = express();
require


//middleware
app.use(express.json(), express.urlencoded({ extended: true }));


app.listen(PORT, () => console.log(` 🎈🎈🎈 Server up on port ${PORT} 🎈🎈🎈`))