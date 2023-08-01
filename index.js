const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const PORT = 8080;
const db = require("./config/mongoose");


app.use(cors());
app.use(express.json());

app.use('/', require('./routes'));

app.listen(PORT, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${PORT}`);
});