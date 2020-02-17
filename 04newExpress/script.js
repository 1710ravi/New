const express = require("express");
const app = express();

var myconsolelog = function(req,res,next){
    console.log("I am Express");
    next();
};
app.use(myconsolelog);

var servertime = function(req,res,next){
    req.requestTime = Date.now();
    next();
}

app.use(servertime);

// {/ is the home page of your page}
app.get('/',(req,res) =>{
    res.send('hello world'+'the time is :'+req.requestTime);
    console.log("Google");
});

app.listen(3000,() => console.log("sever is running at port 3000"));