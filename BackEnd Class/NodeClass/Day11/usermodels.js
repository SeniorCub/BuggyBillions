import mongoose from "mongoose";

const userSchema = new  mongoose.Schema({
     name : {
          type: String,
          required: true,
          trim: true,
     },
     userName : {
          type: String,
          unique: true,
          required: true,
     },
     email : {
          unique: true,
          type: String,
          required: true,
     },
     password : {
          type: String,
          required: true,
     },
     role: {
          type: Number,
          default: 0,
     }
}, { timestamps: true })

export default mongoose.model("user", userSchema)