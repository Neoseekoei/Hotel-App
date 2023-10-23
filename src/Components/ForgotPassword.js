import React from 'react'
import  { useState } from 'react';
import { auth } from '../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {

  const forgotPassword = (()=>{
    sendPasswordResetEmail(auth, email).then(()=> {
      alert("Check your email")

    }).catch((error)=>{

    })
  })

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    }
    
   const [email, setPassword] = useState('')
  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <form >
        {/* <label>
          New Password:
          <input type="password" value={email} onChange={handleEmailChange} />
        </label> */}
        <input type="text" placeholder="Enter email" onChange={(event)=>setPassword(event.target.value)}/>

        Password: <input type={showPassword ? "text" : "password"}  id="myInput"/>
        <input type="checkbox" onChange={handleShowPassword} />Show Password
        <Link to='/login'><button type="button" onClick={forgotPassword}>Reset Password</button></Link>
      </form>
    </div>
  )
}

export default ForgotPassword;
