// let http = require('http')
// let path = require('path')
// let fs = require('fs')

import http from 'http'
import path from 'path'
import fs from 'fs'

const server = http.createServer( (req, res) => {
     if (req.url == "/") {
          fs.readFile(path.join("/home/reuben/BuggyBillions/BackEnd Class/NodeClass/Day9/EXPRESS", "CryptoSite", "index.html"), "utf-8", (err, data) => {
               if (err) {
                    res.writeHead(404, {"Content-Type": "text/plain"})
                    res.end(err)
               } else {
                    res.writeHead(200, {"Content-Type":"text/html"})
                    res.end(data)
               }
          })
     }
     if (req.url == "/style.css") { 
          fs.readFile(path.join("/home/reuben/BuggyBillions/BackEnd Class/NodeClass/Day9/EXPRESS", "CryptoSite", "style.css"), "utf-8", (err, data) => {
               if (err) {
                    res.writeHead(404, {"Content-Type": "text/plain"})
                    res.end(err)
               } else {
                    res.writeHead(200, {"Content-Type":"text/css"})
                    res.end(data)
               }
          })
     }
     if (req.url == "/script.js") { 
          fs.readFile(path.join("/home/reuben/BuggyBillions/BackEnd Class/NodeClass/Day9/EXPRESS/CryptoSite", "script.js"), "utf-8", (err, data) => {
               if (err) {
                    res.writeHead(404, {"Content-Type": "text/plain"})
                    res.end(err)
               } else {
                    res.writeHead(200, {"Content-Type":"text/script"})
                    res.end(data)
               }
          })
     }
});
let port = 8080
server.listen(port, () => {
     console.log(`Server running on port ${port}`);
})