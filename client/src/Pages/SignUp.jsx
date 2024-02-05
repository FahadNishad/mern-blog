import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>

      {/* this is for left side  */}
      <div className='flex-1'>
      <Link
        to="/"
        className="font-bold dark:text-white text-3xl md:text-4xl"
      >
        <span className="px-2  py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Fahad's
        </span>
        Blog
      </Link>
      <p className='text-sm mt-5'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum omnis dolore quibusdam veniam expedita hic beatae sunt totam molestiae eum!
      </p>
      </div>

      {/* this is for right side  */}
      <div className='flex-1'>

        <form className='flex flex-col gap-4'>
          <div>
            <Label value='Your username'></Label>
            <TextInput type='text' placeholder='Username' id='username'/>
          </div>
          <div>
            <Label value='Your email'></Label>
            <TextInput type='text' placeholder='name@company.com' id='email'/>
          </div>
          <div>
            <Label value='Your password'></Label>
            <TextInput type='text' placeholder='Password' id='password'/>
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit'>Sign Up</Button>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
        </div>

      </div>


      </div>
    </div>
  )
}

export default Signup