import { passwordHash } from "../helper/authhelper.js";
import usermodels from "../models/usermodels.js";

export const registerClient = async (req, res) => {
     try {
         const {name, userName, email, password} = req.body
         if (!name) {
             return res.send("Please enter your name")
         }
         if (!userName) {
             return res.send("Please enter your username")
         }
         if (!email) {
             return res.send("Please enter your email")
          }
          if (!password) {
              return res.send("Please enter your password")
          }
          const hashedPassword = await passwordHash(password)
          const usName = await usermodels.findOne({userName})
          const usEmail = await usermodels.findOne({email})
          
          if (usName && usEmail) {
              return res.status(201).send({
               success: false,
               msg: 'Username or Email already exists'
              })
          }
          const newUser = await new  usermodels({name, userName, email, password: hashedPassword}).save();
          res.status(200).send({
               success: true,
               msg: 'User saved sucessesfuly',
               newUser
          })
     } catch (error) {
         res.writeHead(404);
         res.end(error);
     }
 }