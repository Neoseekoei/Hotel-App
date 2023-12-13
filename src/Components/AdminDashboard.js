import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { getAuth } from 'firebase/auth'
import { Link } from "react-router-dom";


import { useNavigate} from "react-router-dom";
function Admin() {
  const [cart, setCart] = useState([]);
  const navigate =  useNavigate()
  const Signout = () => {
    signOut(auth)
      .then(() => {
        alert('Log out successful');
       navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const fetchCartData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Cart"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const filteredData = query
        ? newData.filter((item) => {
            const itemDate = new Date(item.Date);
            const inputDate = new Date(query);
            return (
              itemDate.getFullYear() === inputDate.getFullYear() &&
              itemDate.getMonth() === inputDate.getMonth() &&
              itemDate.getDate() === inputDate.getDate()
            );
          })
        : newData;
      console.log("Filtered Data:", filteredData);
      setCart(filteredData);
    } catch (error) {
      alert("Error fetching data: " + error.message);
      console.error("Error fetching menu: ", error);
    }
  };
  useEffect(() => {
    // Fetch data when the component mounts
    fetchCartData();
  }, []);
  const [query, setQuery] = useState("");
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#856d45",
        marginLeft:"140px",
        marginTop:"100px",
        paddingBottom:"80px"
      }}
    >
      <div className="top">
        <div
          className="button"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <h1 className="maintext" style={{ marginRight: "520px" }}>
            Admin Page
          </h1>
          <button
            className="btn2"
            onClick={Signout}
            style={{ marginTop: "30px",marginLeft:"320px" }}
          >
            Log Out
          </button>
        </div>
      </div>
      <form
       
       style={{ alignItems: "center", marginBottom: "20px" }}
       onSubmit={(e) => {
         e.preventDefault();
         fetchCartData();
       }}
     >
       {/* <input
         type="date"
         placeholder="Search..."
         value={query}
         onChange={(e) => setQuery(e.target.value)}
       />
       <button type="submit" className="submitBtn">
         Submit
       </button> */}
     </form>
      <div
        className="admin"
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "whitesmoke",
          borderRadius: "15px",
          paddingRight: "10px",
          height: "600px",
        }}
      >
        <div className="left3">
          <div
            className="btnRoom"
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
              height: "700px",
              marginRight: "30px",
            }}
          >
            <button
              style={{ marginTop: "40px", marginBottom: "20px" }}
              className="btn4"
            >
              Bookings
            </button>
            {/* <button
              style={{ marginTop: "10px", marginBottom: "20px" }}
              className="btn4"
            >
              Rooms
            </button> */}
          </div>
        </div>
        <div className="right3">
          <table style={{ width: "1000px", paddingTop: "20px" }}>
            <thead
              style={{
                backgroundColor: "#654622",
                color: "#fff",
                margin: "10px",
              }}
            >
              <tr>
                <th className="tablehead" style={{ padding: 10 }}>
                  Name
                </th>
                <th className="tablehead" style={{ padding: 10 }}>
                Phone No.
                </th>
                <th className="tablehead" style={{ padding: 10 }}>
                  Message
                </th>
                <th className="tablehead" style={{ padding: 10 }}>
                  Total Price
                </th>
                <th className="tablehead" style={{ padding: 10 }}>Room Name</th>
                <th className="tablehead" style={{ padding: 10 }}>
                  Number of Nights
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.filter((item) => {
      if (!query) {
        // If no date input, show all records
        return true;
      }
      // Parse dates and compare
      const itemDate = new Date(item.Date);
      const inputDate = new Date(query);
      // Check if the item's date matches the input date
      return (
        itemDate.getFullYear() === inputDate.getFullYear() &&
        itemDate.getMonth() === inputDate.getMonth() &&
        itemDate.getDate() === inputDate.getDate()
      );
    }).map((cart) =>(
              <tr  key={cart.id} style={{backgroundColor:"lightgray"}}>
                    <td style={{paddingLeft:"40px"}}>{cart.Name}</td>
                    <td style={{paddingLeft:"40px"}}>{cart.Phone}</td>
                    <td style={{paddingLeft:"40px"}}>{cart.Message}</td>
                    <td style={{paddingLeft:"40px"}}>R{cart.Total}</td>
                    <td style={{paddingLeft:"40px"}}>{cart.RoomName}</td>
                    <td style={{paddingLeft:"40px"}}>{cart.Count}</td>
              </tr>
              ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Admin;
