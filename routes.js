const express = require('express');
const home = require('./src/controllers/home/home')
const notes = require('./src/controllers/notes/notes')
const route = express.Router();

route.get("/notes", notes)
route.get("/", home)

module.exports = route;
