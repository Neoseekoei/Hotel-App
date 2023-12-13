import React, {useState, useEffect} from "react";
import thankyou from "../Assets/images/flat-lay-thank-you-note-laptop_23-2149706842.jpg";
import { useLocation } from 'react-router-dom';
import { doc, getDocs, collection, deleteDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../config/firebase";

const ThankYou = () => {

  

  return (
    <div className="thanksPage">
      <div style={{display: "flex", flexDirection: "row",marginTop:"200px",justifyContent:"center" }}>
        <div className="reserve">
          <div>
          
  <div>
    <h1
      style={{
        marginBottom: "90px",
        color: "#A87539",
        marginLeft: "-240px",
      }}
    >
      The Reservation
    </h1>

    <h3
      style={{
        marginBottom: "90px",
        color: "#A87539",
        marginLeft: "-240px",
      }}
    >
      Check In: 
    </h3>
    <h3
      style={{
        marginBottom: "90px",
        color: "#A87539",
        marginLeft: "-240px",
      }}
    >
      Check Out: 
    </h3>

    <h3
      style={{
        marginBottom: "90px",
        color: "#A87539",
        marginLeft: "-240px",
      }}
    >
      Price: 
    </h3>
  </div>


          </div>
        </div>

        

        <div>
          <img
            src={thankyou}
            alt=""
            style={{ marginRight: "5rem", width: "450px", height: "570px",borderBottomRightRadius:"15px",borderTopRightRadius:"15px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
