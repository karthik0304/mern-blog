import  express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.router.js';
const app = express();


app.use(express.json());
dotenv.config();
mongoose.connect(process.env.MONGO)
.then( () => {
    console.log("mongoose connected succesfully");
}).catch((error) =>{
    console.log("failed to connect db")
})
app.use('/api/user' , userRoutes);
app.use('/api/user' , authRoutes);

app.get('/' , (req,res)=>{
    res.json({message:"hello"})
})

app.listen(3000 , ()=>{
    console.log("app is listening at port 3000..!")
} );