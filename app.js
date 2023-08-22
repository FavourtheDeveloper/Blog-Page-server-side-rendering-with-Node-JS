const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const Blog = require("./models/blog");

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

app.get("/", function (req, res) {
  Blog.find()
  .then((result) => {
    res.render("index", { blogs : result, title: "Home" });
  })
  .catch((err) => {
    console.log(err);
  })
});


app.post("/", (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
  .then((result) => {
    res.redirect('/'); 
  })
  .catch((err) => {
    console.log(err);
  })
})

app.get("/new", function (req, res) {
  res.render("style");
});

app.get("/saveblogs", (req, res) => {
  const blog = new Blog({
    title: "Post 5 Headlineeee",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgsrc: "views/blog1.jpg",
    imgalt: "blog1",
  });

  blog.save()
    .then((result) => {
      res.send(result);
    })

    .catch((err) => {
      console.log(err);
    })
});

app.get('/index/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
  .then((result) => {
    res.render('details', { blog: result, title: "Blog Details" });
  })
  .catch((err) => {
    console.log(err);
  })


})

app.delete('/index/:id', (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
  .then((result) => {
    res.json({ redirect: '/' });
  })
  .catch((err) => {
    console.log(err);
  })
})
