const express = require('express')
const app = express()

app.set('view engine', 'ejs');

app.use(express.static("./"));

app.get('/', function (req, res) {
    const blogs = [
        {
            title : "Post 1 Headline",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptatibus!",
            imgsrc: 'views/blog.jpg',
            imgalt: 'blog'
        },
        {
            title : "Post 1 Headline",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptatibus!",
            imgsrc: 'views/blog1.jpg',
            imgalt: 'blog1'
        },
        {
            title : "Post 1 Headline",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptatibus!",
            imgsrc: 'views/blog2.jpg',
            imgalt: 'blog2'
        },
       
    ]
  res.render('index', {blogs, title: 'Home'});
})


app.get('/new', function (req, res) {
  res.render('style');
})


app.listen(3000);