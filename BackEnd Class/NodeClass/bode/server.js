//Server
import path from 'path';
import express from 'express';
const app = express();

//Connecting to database (MongoDB)
import dotenv from 'dotenv';

import connectdB from './dB/connect.js';

import morgan from 'morgan';

import blogroute from './routes/blogroute.js';

dotenv.config();
connectdB();

//For getting user info from the sign up page
app.use(express.json());
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }));

//To load my server
app.use('/', express.static(path.join(process.cwd(), '/public')));

app.use('/api/v1/blog', blogroute);

const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`.bgMagenta);
});