// import { create, engine } from "express-handlebars";

const path = require("path");
const express = require("express");
const morgan = require("morgan");
const {engine}= require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// Middleware to log requests
app.use(morgan("combined"));

// Set up Handlebars as the template engine
app.engine("hbs", engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});


app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
