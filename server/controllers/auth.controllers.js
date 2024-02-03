import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
export const signup = async (req, res,next) => {

   const { username, password , email} = req.body;

   if( !username || !password || !email || username === '' || password === '' || email === ''){
     next( errorHandler(400, "all fields are required") )
   }
   const hashedPassword = bcryptjs.hashSync('password' ,10);
   const newUser = new User({
    username,
    password:hashedPassword,
    email
   });

   try{
    await newUser.save();
    res.status(200)
    .json("created user sucessfully");
   }catch(error){
    next(error);
   }
};