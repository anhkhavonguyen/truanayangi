var express = require('express');
var router = express.Router();
var foodRoutes = require('./food');

router.use('/food', foodRoutes);

module.exports = router;


