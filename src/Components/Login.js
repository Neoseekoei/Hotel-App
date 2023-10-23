import React from 'react'
import { useNavigate , Link } from "react-router-dom";
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react';
import { auth } from '../config/firebase'

const Login = () => {

//   const[email, setEmail] = useState('');
//   const[password, setPassword] = useState('')

//   const login = (() =>{
//  signInWithEmailAndPassword(auth, email, password).then(() =>{

//   alert('Log In successfully');

//  }).catch((error)=>{
//   console.log(error.massage)

//  })

// })

//   return (
//     <div className='plain'>
//       <form action="action_page.php" method="post">
//   <div class="imgcontainer">
//     <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
//   </div>

//   <div class="container">
//     <label for="uname"><b>Email</b></label>
//     <input type="text" placeholder="Enter Email" name="uname" required onChange={(event)=> setEmail(event.target.value)}/>

//     <label for="psw"><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" name="psw" required onChange={(event)=> setPassword(event.target.value)}/>

//     <Link to='/home'><button type="submit" onClick={login}>Login</button></Link>

//   </div>

//   <div class="container" >
//     {/* <button type="button" class="cancelbtn">Cancel</button> */}
//     <Link to='/forgotpassword'><span class="psw">Forgot  <a href="#">password?</a></span></Link>
//   </div>
// </form>
//     </div>
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const login = (() =>{

  signInWithEmailAndPassword( auth, email, password).then(() =>{
    alert('Log in successfully')
    navigate("/home");

  }).catch((error)=>{
    console.log(error.massage)
  })

})
return (
  <div>
    <form className="sign_in_form" action="action_page.php">
<div className="container">
  <h1 className='register'>Log In</h1>
  <p className='rtext'>Please fill in this form to login in to account.</p>
  

  <label for="email"><b>Email</b></label>
  <input type="text" placeholder="Enter Email" name="email" id="email" required onChange={(event)=> setEmail(event.target.value)}/>

  <label for="psw"><b>Password</b></label>
  <input type="password" placeholder="Enter Password" name="psw" id="psw" required onChange={(event)=> setPassword(event.target.value)}/>

  {/* <label for="psw-repeat"><b>Repeat Password</b></label>
  <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
   */}

  <p>Administrator <a href="#">LogIn</a>.</p>
  <Link to='/login'><button type="submit" class="registerbtn" onClick={login}>Log In</button></Link>
  <Link to='/forgotpassword'><span class="psw">Forgot  <a href="#">password?</a></span></Link>
</div>

</form>
  </div>
  )
}

export default Login
