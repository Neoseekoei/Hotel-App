import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const validateForm = () => {
    // Trim leading and trailing whitespaces from email and password
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Check if email or password is empty after trimming
    if (!trimmedEmail || !trimmedPassword) {
      setError('Please fill out all fields.');
      return false;
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return false;
    }

    // Password strength validation
    const minPasswordLength = 6;
    if (trimmedPassword.length < minPasswordLength) {
      setError(`Password must be at least ${minPasswordLength} characters long.`);
      return false;
    }

    // Additional password check: No spaces in the password
    if (trimmedPassword.includes(' ')) {
      setError('Password cannot contain spaces.');
      return false;
    }

    // Additional email and password length checks
    const maxEmailLength = 50; // Set your desired maximum email length
    const maxPasswordLength = 20; // Set your desired maximum password length

    if (trimmedEmail.length > maxEmailLength) {
      setError(`Email must be at most ${maxEmailLength} characters long.`);
      return false;
    }

    if (trimmedPassword.length > maxPasswordLength) {
      setError(`Password must be at most ${maxPasswordLength} characters long.`);
      return false;
    }

    setError(null);
    return true;
  };

  const login = () => {
    if (validateForm()) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert('Log in successfully');
          navigate('/home');
        })
        .catch(() => {
          setError('Invalid email or password. Please try again.');
        });
    }
  };

  return (
    <div>
      <form className="sign_in_form" action="action_page.php">
        <div className="container">
          <h1 className="register">Log In</h1>
          <p className="rtext">Please fill in this form to log in to your account.</p>
          <div style={{ marginTop: '30px' }}>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
              aria-label="Email"
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
              aria-label="Password"
            />

            {error && <div className="error-message">{error}</div>}
          </div>
          <Link to="/registration">
            <p>
              Don't have an account? <a href="#">Create Account</a>.
            </p>
          </Link>
          <button
            type="button"
            className="registerbtn"
            style={{ marginTop: '30px', marginBottom: '-40px' }}
            onClick={login}
          >
            Log In
          </button>
          <Link to="/forgotpassword">
            <span className="psw" style={{ marginTop: '-20px' }}>
              Forgot <a href="#">password?</a>
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
