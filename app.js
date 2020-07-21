const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
const faker = require("faker");

//routes
app.get("/", function(req, res){
    res.render('index.ejs', {currentPage: "Overview", 
                             fakeDate: faker.date.past(),
                             catImg: faker.image.cats(),
                             catName: faker.name.firstName()});
});

app.get("/html", function(req, res){
    res.render('html.ejs', {currentPage: "HTML", 
                             fakeDate: faker.date.past(),
                             catImg: faker.image.cats(),
                             catName: faker.name.firstName()});
});

app.get("/csspage", function(req, res){
    res.render('css.ejs', {currentPage: "CSS", 
                             fakeDate: faker.date.past(),
                             catImg: faker.image.cats(),
                             catName: faker.name.firstName()});
});

app.get("/javascript", function(req, res){
    res.render('javascript.ejs', {currentPage: "JavaScript", 
                                  fakeDate: faker.date.past(),
                                  catImg: faker.image.cats(),
                                  catName: faker.name.firstName()});
});

//starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running...");
});
