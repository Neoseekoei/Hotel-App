import React from 'react'
import {useNavigate, Link } from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
// import { auth } from '../config/firebase';
import {auth} from '../config/firebase'
import { useState } from 'react';

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const register = (() =>{

    createUserWithEmailAndPassword( auth, email, password).then(() =>{
      alert('Registered successfully')
      navigate("/home");

    }).catch((error)=>{
      console.log(error.massage)
    })

  })
  return (
    <div>
      <form className="sign_in_form" action="action_page.php">
  <div className="container">
    <h1 className='register'>Register</h1>
    <p className='rtext'>Please fill in this form to create an account.</p>
    

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required onChange={(event)=> setEmail(event.target.value)}/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required onChange={(event)=> setPassword(event.target.value)}/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <Link to='/login'><button type="submit" class="registerbtn" onClick={register}>Register</button></Link>
  </div>

 </form>
    </div>
  )
}

export default Registration
