const Blog = require("../models/blog");

const blogIndex = (req, res) => {
    Blog.find()
    .then((result) => {
      res.render("index", { blogs : result, title: "Home" });
    })
    .catch((err) => {
      console.log(err);
    })
}

const blogDetails = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
      res.render('details', { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      res.write("404 Error")
      res.send
    })
}

const blogDelete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/' });
    })
    .catch((err) => {
      console.log(err);
    })
}

const blogCreate = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
      res.redirect('/'); 
    })
    .catch((err) => {
      console.log(err);
    })
}

module.exports = {
    blogIndex,
    blogCreate,
    blogDelete,
    blogDetails
}