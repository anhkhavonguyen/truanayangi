const express = require('express');
var config = require('./config/config');
var router = require('./routes/api-routes');
const app = express();
const mongoose = require("mongoose");

// setup the Express middlware
require('./middlewares/middleware')(app);

app.use((req, res, next) => {
    if (mongoose.connection.readyState) {
      next();
    } else {
      require("./mongo")().then(() => next());
    }
  });
  

// setup the routes
app.use("/", router);

app.listen(config.port, () => {
    console.log('running server on port ' + config.port);
})
