import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
export const signup = async (req, res) => {

   const { username, password , email} = req.body;

   if( !username || !password || !email || username === '' || password === '' || email === ''){
    return res.status(500).json("all fieds are required") ;
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
    res.status(500)
    .json("unable to create a user");
   }
};