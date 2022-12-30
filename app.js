const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("Public"));

app.get('/signup.html', function(req, res){
    res.sendFile(__dirname+"/signup.html");
});

app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");
});


//  app.get('/', function(req, res){
//     res.sendFile(__dirname+"/");
// });

 app.get('/index.html', function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.get('/AboutUs.html', function(req, res){
    res.sendFile(__dirname+"/AboutUs.html");
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});
