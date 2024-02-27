import express from 'express';
import path from 'path';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import connectDB from './connect.js'
const app = express();
dotenv.config();

connectDB()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(path.join(process.cwd(), "/public")))


app.post('/signUp.html', (req, res) => {
     try {
         const {first, last, email, password} = req.body
         bcrypt.hash(password, 10, (err, hash) => {
             if (err) throw err;
             console.log(
                 {
                     "firstname": first,
                     "lastname": last,
                     "email": email,
                     "password": hash,
                 }
             )
         })
         res.sendFile(path.join(process.cwd(), "public", "index.html"));
     } catch (error) {
         res.writeHead(404);
         res.end(error);
     }
 });
 
 app.get('/signUp.html', (req, res) =>{
     res.sendFile(path.join(process.cwd(), "public", "signUp.html"))
 });

const port = 5050
app.listen(port, ()=>{
     console.log(`Server running on http://localhost:${port}`);
})