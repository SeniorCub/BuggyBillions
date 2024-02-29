import express from 'express';
import path from 'path';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import connectDB from './connect.js';
import color from 'colors';
import morgan from 'morgan';
import usermodels from './usermodels.js';
const app = express();
dotenv.config();

connectDB()

app.use(express.json());
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(path.join(process.cwd(), "/public")))


app.post('/signUp', (req, res) => {
     try {
         const {name, userName, email, password} = req.body
         bcrypt.hash(password, 10, (err, hash) => {
             if (err) throw err;
             console.log(
                 {
                     "firstname": name,
                     "Username": userName,
                     "email": email,
                     "password": hash,
                 }
             )
          const newUser = new  usermodels({name, userName, email, password: hash});
          newUser.save()
          res.status(200).send({
               success: true,
               msg: 'User saved sucessesfuly',
               newUser
          })
     })
     } catch (error) {
         res.writeHead(404);
         res.end(error);
     }
 });
 
 app.get('/signUp.html', (req, res) =>{
     res.sendFile(path.join(process.cwd(), "public", "signUp.html"))
 });

const PORT = (process.env.PORT || 5000 );
app.listen(PORT, ()=>{
     console.log(`Server running on http://localhost:${PORT}`.bgBlue.red);
})