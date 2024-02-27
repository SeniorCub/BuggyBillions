import  mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
     try {
          const corn = await  mongoose.connect(process.env.MONGO_URL)
          console.log(`Connected to database on host ${corn.connection.host}`);
     } catch (error) {
          console.log(`The error is ${error}`);
     }
}

export default connectDB