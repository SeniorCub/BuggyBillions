const http = require('http')

const server =http.createServer((req, res)=>{
     if(req.url == "/"){
          res.writeHead(200, {'content-type': 'text/plain'})
          res.end("Word")
     }
})
server.listen(3000, ()=>{
     console.log("server running on port 3000");
})