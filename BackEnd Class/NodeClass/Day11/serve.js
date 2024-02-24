// // let http = require('http');
// // let path = require('path');
// // let fs = require('fs');
// import http from 'http';
// import path from 'path';
// import fs from 'fs';

// const server = http.createServer( (req, res, next) => {
//     if (req.url == "/") {
//         fs.readFile(path.join(process.cwd(), "Kenny", "index.html"), "utf-8", (err, data) => {
//             if (err) {
//                 res.writeHead(404, {"Content-Type": "text/plain"});
//                 res.end(err);
//             } else {
//                 res.writeHead(200, {"Content-Type": "text/html"});
//                 res.end(data);
//             }
//         })
//     }
//     else if (req.url == "/style.css") {
//         fs.readFile(path.join(process.cwd(), "Kenny", "style.css"), "utf-8", (err, data) => {
//             if (err) {
//                 res.writeHead(404, {"Content-Type": "text/plain"});
//                 res.end("here is the err" + err);
//             } else {
//                 res.writeHead(200, {"Content-Type": "text/css"});
//                 res.end(data);
//             }
//         })
//     }
// });
// server.listen(8080, () => {
//     console.log("server running on port 8080");
// });

import path from 'path';
import express from 'express';
import bcrypt from 'bcrypt';
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', express.static(path.join(process.cwd(), '/FreeWeb')));
// app.use('/about', express.static(path.join(process.cwd(), '/Kenny')));
// app.use('/package', express.static(path.join(process.cwd(), 'package.json')));
// app.get('/package', function (req, res) {
//     res.sendFile(path.join(process.cwd(),"demoapi.json"));
// });

app.post('/signup.html', (req, res) => {
    try {
        const {first, last, email, password} = req.body
        bcrypt.hash(password, 20, (err, hash) => {
            if (err) throw err;
            console.log(
                {
                    "firstname": first,
                    "lastname": last,
                    "email": email,
                    "password": hash
                }
            )
        })
        res.sendFile(path.join(process.cwd(), "FreeWeb", "index.html"));
    } catch (error) {
        res.writeHead(404);
        res.end(error);
    }
});

app.get('/signup.html', (req, res) =>{
    res.sendFile(path.join(process.cwd(), "FreeWeb", "signup.html"))
});
// app.get('/', function (req, res) {
//     res.sendFile(path.join(process.cwd(), "OKX", "okx.html"));
// });
// app.get('/okx.css', function (req, res) {
//     res.sendFile(path.join(process.cwd(), "OKX", "okx.css"));
// });
// app.get('/about', function (req, res) {
//     res.send('My About Page')
// });
// app.get('/contact', function (req, res) {
//     res.send('My Contact Page')
// });
// app.get('/service', function (req, res) {
//     res.send('My Service Page')
// });
app.listen(8080, () => {
    console.log("Server running on port 8080");
});