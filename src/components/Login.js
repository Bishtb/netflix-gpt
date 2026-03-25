import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSignInForm , setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
      setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute '>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_medium.jpg' alt='logo'/>
      </div>
      <form className=' p-12 w-1/4 bg-transparent absolute my-36 mx-auto right-0 left-0 text-white bg-black rounded-lg bg-opacity-80'>
      <h1 className=' font-bold py-4 text-xl'>{ isSignInForm? "Sign In": "Sign Up" }</h1>
        { !isSignInForm && <input type="text" placeholder='Full Name ' className='p-4 my-4 w-full bg-gray-800' />}
        <input type="text" placeholder='Email Address ' className='p-4 my-4 w-full bg-gray-800' />
        <input type="password" placeholder='Password' className='p-4 my-4 w-full  bg-gray-800' />
        <button className='p-4 my-6 text-white w-full bg-red-700 rounded-lg'>{ isSignInForm ? "Sign In": "Sign Up"}</button>
        <p className='py-6 cursor-pointer' onClick={toggleSignInForm} >{ isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In"}</p>
      </form>
    </div>
  )
}

export default Login;