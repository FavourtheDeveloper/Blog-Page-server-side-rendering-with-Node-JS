const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const blogRouter = require('./routes/blogRouter');

const app = express();

const dbURI =
  "mongodb+srv://FavourtheDev:FavourtheDev@blogs.xj33yyr.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("Connected to the db");
    app.listen(3000);
  })

  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");

app.use(express.static("./"));
app.use(express.urlencoded({ extended: true }))

app.use(morgan("dev"));

app.use(blogRouter);

