const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 52003;

const mimeTypes = {
    'html':'text/html',
    'css':'text/css',
    'js':'text/javascript',
    'jpeg': 'image/jpeg',
    'jpg': 'img',
};

http.createServer((req,res) => {
    var myuri = url.parse(req.url,true);
    var filename = path.join(process.cwd(),unescape(myuri));
    console.log("File you are looking for");
    var loadFile;
    console.log("myuri"+myuri+" filename"+filename+" loadFile"+loadFile);

    try {
        loadFile = fs.lstatSync(filename)
    } catch (error) {
        res.writeHead(500,{'mime-Type':'text-plain'});
        res.writeHead('404 Page not found');
        res.end();
        return;
    }

    if(loadFile.isFile()){
        var mimeType = mimeTypes[path.extname(filename).split(".").reverse()[0]];
        Response.writeHead(200,{'Content-Type': mimeTypre});
        var filestream = fs.createReadStream(filename);
        filename.pipe(res);
    }
    else if(loadFile.isDirectory()){
        res.writeHead(302,{'Location':'index.html'});
        res.end();
    }
    else{
        res.writeHead(500,{'mime-Type':'text-plain'});
        res.writeHead('500 Internal Error');
        res.end();
    }
},
console.log("Not running")).listen(port ,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
    
})