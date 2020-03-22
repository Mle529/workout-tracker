const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://<mnle>:<Bootcamp1234>@ds011331.mlab.com:11331/heroku_nqcvg87n";
mongoose.connect(MONGODB_URI);

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log(`App listening on Port ${PORT}`);
});