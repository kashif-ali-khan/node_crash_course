const path  = require('path');
const http = require('http');
const fs = require('fs');
const httpServer = http.createServer((req,res)=>{
console.log(req.url)

let filename = 'index.html';
    if(req.url === '/about'){
        filename = 'about.html'
    }
   fs.readFile(path.join(__dirname,'public',filename),(err,data)=>{
    if(err){
        throw err;
    }
    res.writeHead(200,{
        'Content-type':'text/html'
    })
    res.end(data)
   })
})

const port = process.env.port || 5000
httpServer.listen(port,()=>console.log(`Server running at ${port} port`))