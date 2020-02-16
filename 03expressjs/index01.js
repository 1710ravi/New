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
});
app.post('/login',(req,res) => {
    res.send("Login Successfull");
}); 
app.delete('/delete',(req,res) => {
    res.send("Successfull Logout");
});   
app.get('/ab*cd',(req,res) =>{
    res.send("Google");
});
// app.get('/a/b*c+d-e',(req,res) => {
//     res.send("Microsoft");
// });
app.get('/user/:id',(req,res) =>{
    res.send("Facebook");
    res.send(req.params);
    //if Facebook is not commented then  you will only get Facebook as text.
});
app.get('/user/:id/status/:status_id',(req,res) =>{
    // res.send("Adobe");
    res.send(req.params);
});
app.get('/route/:from-:to',(req,res) =>{
    res.send(req.params);
});
app.listen(3000,() => console.log("sever is running at port 3000"));