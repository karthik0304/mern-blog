import  express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO)
.then( () => {
    console.log("mongoose connected succesfully");
}).catch((error) =>{
    console.log("failed to connect db")
})


app.listen(3000 , ()=>{
    console.log("app is listening at port 3000..!")
} );