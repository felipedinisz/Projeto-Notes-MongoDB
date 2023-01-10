const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const routes = require("./routes");
const path = require('path');

const app = express();
const port = 3000;

//DB
const db = require('./db/connection')

//template engine
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs.engine());
app.set("views", path.resolve(__dirname, "src", "views"));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(routes);

db.initDb((err, db) => {
  if(err) {
    console.log(err)
    return;
  }

  console.log("Database conectada com sucesso.")
  app.listen(port, () => {
    console.log(`Acessar http://localhost:${port}`)
  })
})
