
const express = require("express");
const mongoose = require("mongoose");
const PORT = 8080;

const app = express();
app.use(express.static(__dirname + "/public/dist/public"));

app.use(express.urlencoded({extended: true}));

app.use(express.json());
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(PORT, () => console.log("Running on port: " + PORT));