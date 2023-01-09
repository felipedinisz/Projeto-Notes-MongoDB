const express = require('express');
const home = require('./src/controllers/home/home')
const route = express.Router();

route.get("/", home)

module.exports = route;
