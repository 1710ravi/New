const express = require('express')
const bodyparser = require('body-parser')

let app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use('/logoin',express.static(__dirname + "/public"))

app.get("/",(req,res) =>{
    res.send('Hello');
});

app.post("/ravi",(req,res) =>{
    console.log(req.body.email);
    //do some data process
    res.redirect("/");
});

app.listen(3000,()=> console.log("Servre is running at port 3000"))