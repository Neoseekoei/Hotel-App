import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection,doc, setDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [role,setRole] = useState("user");
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    // Trigger form validation when email or password changes
    validateForm();
  }, [email, password]);
  const validateForm = () => {
    let errors = {};
    // Validate email field
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    
    // Validate password field
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    if (!number) {
      errors.number = "Number is required.";
    } else if (number.length < 10) {
      errors.number = "Number must be at least 10 characters.";
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };
  const handleRegistration = async () => {
    validateForm(); // Trigger validation before attempting to sign in
    if (isFormValid) {
      try {
        await createUserWithEmailAndPassword(auth, email, password).then(async() => {
          try {
            const auth = getAuth();
            const user = auth.currentUser;
            const userId = user.uid;
  
            if (user && user.uid) {
              const userDocRef = doc(db, "users",  email);
              await setDoc(userDocRef,{
                Email: email,
                Address: address,
                Name: name,
                Number: number,
                role:"user",
                
              }) 
              alert("Successfully Logged In");
              navigate("/Login");
  
           }} catch (e) {
            console.error("Error adding document: ", e.message);
            alert("Error in adding");
          }
        })
       
      } catch (error) {
        console.error("Error signing in:", error);
        alert("Invalid credentials. Please try again.");
      }
    }
  };
  return (
    <div className="sign_in_form" style={{ marginTop: "-20px",paddingBottom:"90px",marginTop:"100px" }}>
      <div className="main" >
        <div className="right2" style={{ marginTop: "20px" }}>
          <div className="imgsign"></div>
          <h1 style={{ marginLeft: "280px" }}>Sign Up</h1>
          <br />
          <div
            style={{
              marginTop: "20px",
              paddingLeft: "70px",
              marginLeft: "80px",
            }}
          >
            <h3 style={{ marginBottom: "-5px", color: "white" }}>Username:</h3>
            <input
              style={{
                marginBottom: "5px",
                width: "370px",
                height: "40px",
                backgroundColor: "white",
                color: "gray",
              }}
              type="text"
              placeholder="Username..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            
            <h3 style={{ marginBottom: "-5px", color: "white" }}>
              Phone Number:
            </h3>
            <input
              style={{
                marginBottom: "5px",
                width: "370px",
                height: "40px",
                backgroundColor: "white",
                color: "gray",
              }}
              type="text"
              placeholder="Phone No. ..."
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <p style={{ color: "red" }}>{errors.number}</p>
            <h3 style={{ marginBottom: "-5px", color: "white" }}>Address:</h3>
            <input
              style={{
                marginBottom: "5px",
                width: "370px",
                height: "40px",
                backgroundColor: "white",
                color: "gray",
              }}
              type="text"
              placeholder="Address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <h3 style={{ marginBottom: "-5px", color: "white" }}>Email:</h3>
            <input
              style={{
                marginBottom: "5px",
                width: "370px",
                height: "40px",
                backgroundColor: "white",
                color: "gray",
              }}
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p style={{ color: "red" }}>{errors.email}</p>
            <h3 style={{ marginBottom: "-5px", color: "white" }}>Password:</h3>
            <input
              style={{
                marginBottom: "5px",
                width: "370px",
                height: "40px",
                backgroundColor: "white",
                color: "gray",
              }}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <p style={{ color: "red" }}>{errors.password}</p>
          </div>
          <button
            className="registerbtn"
            style={{ marginRight: 40 }}
            onClick={() => {
              handleRegistration();
            }}
            disabled={!isFormValid}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
export default Registration;
