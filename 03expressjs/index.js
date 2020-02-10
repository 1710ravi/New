const express = require("express");
const app = express();

// {/ is the home page of your page}
app.get('/',(req,res) =>{
    res.send('hello world');
});
app.get('/about',(req,res) =>{
    res.send("<h1>I am about page</h1>");
});
app.get('/contact',(req,res) =>{
    res.send("You can contact us");
});
app.get('/service',(req,res) =>{
    res.send("<ul><li>Web Developement</li><li>Loo Designer</li><li>App Developement</li></ul>");
})
app.listen(3000,() => console.log("sever is running at port 3000"));