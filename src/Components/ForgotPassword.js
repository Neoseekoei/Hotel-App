import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate, Link } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const validateForm = () => {
    if (!email) {
      setError('Please enter your email.');
      return false;
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    setError(null);
    return true;
  };

  const handleResetPassword = () => {
    if (validateForm()) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert('Password reset email sent successfully');
          navigate('/login'); // Redirect to your login page or any other page
        })
        .catch((error) => {
          setError(`Error sending password reset email: ${error.message}`);
        });
    }
  };

  return (
    <div style={{}}>
     
      <form  className='ForgotPasswordContainer'>
         <h2>Forgot Password</h2>
         
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={{ color: 'red' }}>{error}</p>
        <button type="button" onClick={handleResetPassword}>
          Reset Password
        </button>
      </form>
      
    </div>
  );
};

export default ForgotPassword;
