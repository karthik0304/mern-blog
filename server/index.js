import  express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.router.js';
const app = express();
dotenv.config();


mongoose.connect(process.env.MONGO)
.then( () => {
    console.log("mongoose connected succesfully");
}).catch((error) =>{
    console.log("failed to connect db")
})

app.use(express.json());
app.use('/api/user' , userRoutes);
app.use('/api/user' , authRoutes);

app.use((err, req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
});

app.listen(3000 , ()=>{
    console.log("app is listening at port 3000..!")
} );