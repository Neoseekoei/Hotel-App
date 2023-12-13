import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";


const Description = () => {
  const location = useLocation();
  const data = location.state;
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors({ ...errors, email: "Invalid email address" });
      return false;
    } else {
      setErrors({ ...errors, email: "" });
      return true;
    }
  };

  const validatePhone = () => {
    const phoneRegex = /^\d+$/; // Numeric only
    if (!phoneRegex.test(formData.phone)) {
      setErrors({ ...errors, phone: "Invalid phone number" });
      return false;
    } else {
      setErrors({ ...errors, phone: "" });
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation before submitting
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();

    if (isEmailValid && isPhoneValid) {
      // Proceed with form submission
      console.log("Form submitted:", formData);

      handleFormSubmit();
    } else {
      console.log("Form validation failed");
    }
  };

  const handleFormSubmit = async () => {
    try {
      if (user) {
        const docRef = await addDoc(collection(db, "Cart" + user.uid), {
          UserId: user.uid,
          Name: formData.username,
          Email: formData.email,
          Phone: formData.phone,
          Message: formData.message,
          RoomName: data.name,
          Description: data.description,
          Price: data.price,
          Count:count,
          Total:parseInt(data.price)* count,
        });
        alert("Thank You for Booking with us");
        console.log("Document written with ID: ", docRef.id);

        const docRef1 = await addDoc(collection(db, "Cart"), {
          UserId: user.uid,
          Name: formData.username,
          Email: formData.email,
          Phone: formData.phone,
          Message: formData.message,
          RoomName: data.name,
          Description: data.description,
          Price: data.price,
          Count:count,
          Total:parseInt(data.price)* count,
        });
        alert("Your Room has been booked");
      } else {
        console.error("User not authenticated");
      }
    } catch (e) {
      alert("error");
      console.error("Error adding document: ", e);
    }
  };
  // const YourComponent = () => {

  //   const [username, setUsername] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [phone, setPhone] = useState('');
  //   const [message, setMessage] = useState('');

  //   const handleUsernameChange = (e) => {
  //     setUsername(e.target.value);
  //   };

  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const handlePhoneChange = (e) => {
  //     setPhone(e.target.value);
  //   };

  //   const handleMessageChange = (e) => {
  //     setMessage(e.target.value);
  //   };

  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "220px",
        borderTopRightRadius: "15px",
      }}
    >
      <div
        className="Leftside"
        style={{
          backgroundColor: "#A88346",
          width: "500px",
          height: "650px",
          borderWidth: "2px",
          borderColor: "gray",
        }}
      >
        <div className="inputscontact">
          <input
            className="inputsall"
            placeholder="username..."
            type="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            className="inputsall"
            placeholder="Email..."
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          /><br/>
          <span style={{ color: "red" }}>{errors.email}</span>

          <input
            className="inputsall"
            placeholder="Phone..."
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          /><br/>
          <span style={{ color: "red" }}>{errors.phone}</span>

          <input
            className="inputsall"
            placeholder="Message..."
            type="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />

          <div style={{marginLeft:"70px"}}>
            <h4 style={{color:"white",marginLeft:"50px",marginBottom:"-5px"}}>Number of Nights:</h4>
            <div style={{display:"flex",flexDirection:"row"}}>
              <button onClick={() => setCount(count - 1)} style={{marginRight:"30px"}}>
                -
              </button>
              <p onChange={() => setCount(initialCount)} style={{color:"white",marginRight:"-20px",marginTop:"30px",fontSize:"25px"}}>{count}</p>
              <button onClick={() => setCount(count + 1)} >
                +
              </button>
            </div>
          </div>
          
          <button className="contactButton" onClick={handleSubmit}>
            SEND
          </button>
         
        </div>
      </div>
      <div
        className="Rightside"
        style={{
          backgroundColor: "whitesmoke",
          width: "500px",
          display: "flex",
        }}
      >
        <div>
          <img
            src={data.image}
            alt="React Image"
            style={{
              display: "flex",
              alignSelf: "start",
              width: "500px",
              height: "330px",
            }}
          />
          <h1 style={{ marginLeft: "100px" }}>{data.name}</h1>
          <p
            style={{ width: "380px", textAlign: "center", marginLeft: "60px" }}
          >
            {data.description}
          </p>

          <h2 style={{ marginLeft: "130px" }}>R{parseInt(data.price)* count}</h2>
        </div>
      </div>
    </div>
  );
};

export default Description;
