const express = require('express');
const Blog = require("../models/blog");
const router = express.Router();

router.get("/", function (req, res) {
    Blog.find()
    .then((result) => {
      res.render("index", { blogs : result, title: "Home" });
    })
    .catch((err) => {
      console.log(err);
    })
  });
  
  
  router.post("/", (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
      res.redirect('/'); 
    })
    .catch((err) => {
      console.log(err);
    })
  })
  
  router.get("/new", function (req, res) {
    res.render("style");
  });
  
  router.get("/saveblogs", (req, res) => {
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
  
  router.get('/index/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
      res.render('details', { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    })
  
  
  })
  
  router.delete('/index/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/' });
    })
    .catch((err) => {
      console.log(err);
    })
  })

  
  module.exports = router;