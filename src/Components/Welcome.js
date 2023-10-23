import React from 'react'
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className='background'>
      <div className="welcome-container">
      <h1>Welcome to our Hotel!</h1>
      <p>We are glad to have you here.</p>
      <p>Feel free to explore and enjoy your stay.</p>
      <Link to='/login'><button className='loginbutton'>Login</button></Link><br></br>
      <Link to='/registration'><button className='signB'>Sign Up</button></Link>
        </div>
    </div>
  )
}

export default Welcome;
