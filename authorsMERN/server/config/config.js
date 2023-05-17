const mongoose = require('mongoose')
// consts from .env
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@cluster0.nldceal.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Connect to the DB
mongoose.connect(uri)
    .then(() => console.log(`🎉🎉🎉🎉🎉🎉🎉---Established a connection to the ${dbName} database`))
    .catch(err => console.log(`🆘🆘🆘🆘🆘🆘🆘🆘Something went wrong when connecting to the ${dbName} database`, err));
