const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const MONGO_URI = "mongodb://localhost/health_api";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

const db = mongoose.connection;

db.on('error',  console.error.bind(console, 'error connecting to db'));

db.once('open', () => {
    console.log('Successfully connected to the database');

})