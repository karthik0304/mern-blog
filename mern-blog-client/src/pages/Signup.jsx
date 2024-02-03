import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
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
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='your username'/>
              <TextInput type='text' placeholder='username' id='username' name='username' />
            </div>
            <div>
              <Label value='your email'/>
              <TextInput type='email' placeholder='email@comapany.com' id='email' name='email' />
            </div>
            <div>
              <Label value='your password'/>
              <TextInput type='text' placeholder='password' id='password' name='password' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'> 
            SignUp</Button>
          </form>
          <div className=' text-sm flex gap-2 mt-5'>
            <span>Have an account?</span>
            <Link to={"/signin"} className=' text-blue-500' >sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup