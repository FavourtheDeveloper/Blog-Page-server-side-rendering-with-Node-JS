const express = require('express');
const Blog = require("../models/blog");
const blogControl = require('../controller/blogController')
const router = express.Router();

router.get("/", blogControl.blogIndex);
  
  
  router.post("/", blogControl.blogCreate)
  
  router.get("/new", function (req, res) {
    res.render("style");
  });
  

  router.get('/index/:id', blogControl.blogDetails)
  
  router.delete('/index/:id', blogControl.blogDelete)

  
  module.exports = router;