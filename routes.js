const express = require("express");
const home = require("./src/controllers/home/home");
const notes = require("./src/controllers/notes/notes");
const route = express.Router();

route.get("/notes", notes.getnotes);
route.get("/", home.home);
route.get("/:id", notes.details);
route.get("/edit/:id", notes.editnote);
route.post("/notes", notes.postnotes);
route.post("/delete", notes.delete);
module.exports = route;
