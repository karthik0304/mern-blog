import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate();
  const [formData , setFormData] = useState({});
  const [errorMessage  , setErrorMessage] = useState(null);
  const [loading , setLoading] = useState(false);

  const changeHandler = (event)=>{
      setLoading(false);
      setFormData({
        ...formData,
        [event.target.id] : event.target.value 
      });
  }

  const submitHandler = async(e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage("Please fill all the details")
    }
    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/user/signup' ,{
        method :'POST',
        headers : { 'Content-Type': 'application/json'},
        body : JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        return setErrorMessage( data.message);
      }
      if(res.ok){
        navigate("/signin");
      }
    setLoading(false);
    }catch(error){
      setErrorMessage(error.message);
      setLoading(false);
    }
  }


  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 '>
        {/* left side */}
        <div className='flex-1'>
        <Link to={"/"} className='  text-4xl font-bold dark:text-white'>
            <span className=' px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500
             to-pink-500 rounded-lg'>Karthik's</span>
            Blog
        </Link>
        <p className='text-sm mt-5'>
        this is a demo projects.you can sign in through email</p>
        </div>
        {/* right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4 ' onSubmit={submitHandler} >
            <div>
              <Label value='your username'/>
              <TextInput type='text' placeholder='username' id='username' name='username' onChange={changeHandler} />
            </div>
            <div>
              <Label value='your email'/>
              <TextInput type='email' placeholder='email@comapany.com' id='email' name='email' onChange={changeHandler} />
            </div>
            <div>
              <Label value='your password'/>
              <TextInput type='password' placeholder='password' id='password' name='password' onChange={changeHandler} />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading} > 
            {
              loading ?
               <>
               (<Spinner size='sm'  />)
               <span className='pl-3'>loading...</span>
               </>
                : ( 'Sign Up')
            }
           </Button>
          </form>
          <div className=' text-sm flex gap-2 mt-5'>
            <span>Have an account?</span>
            <Link to={"/signin"} className=' text-blue-500' >sign In</Link>
          </div>
          {
            errorMessage && 
            (
              <Alert className=" mt-5" color='failure'  > 
              {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Signup