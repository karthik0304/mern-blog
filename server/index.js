import  express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO)
.then( () => {
    console.log("mongoose connected succesfully");
}).catch((error) =>{
    console.log("failed to connect db")
})


app.use('/api/user' , userRoutes);

app.listen(3000 , ()=>{
    console.log("app is listening at port 3000..!")
} );