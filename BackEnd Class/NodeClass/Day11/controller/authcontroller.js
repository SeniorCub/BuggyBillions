import { use } from "bcrypt/promises.js";
import { passwordHash , passwordCompare} from "../helper/authhelper.js";
import usermodels from "../models/usermodels.js";
import jwt from "jsonwebtoken";

// For Register
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
         res.status(404);
         res.end(error);
     }
}

// For Login
export const loginClient = async (req, res) => {
     try {
          const{email, password}= req.body;
          if (!email || !password) {
               return res.status(201).send({
                    success: false,
                    msg: "Unable to Login, please enter your email and password"
               })
          }
          const user = await usermodels.findOne({email});
          if (!user) {
               return res.status(404).send({
                    success: false,
                    msg: "Invalid Email, User does not exist"
               })
          }

          const match = await passwordCompare(password, user.password);
          if (!match) {
               return res.status(201).send({
                    success: false,
                    msg: "Invalid Password, please enter a valid password"
               })
          }
          const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '2d'});
          res.status(200).send({
               success: true,
               msg: "Login successful!!",
               user: {
                    name: user.name,
                    email: user.email,
                    userName: user.userName

               },
               token
          })
     } catch (error) {
          res.status(404);
          res.end(error);
     }
}