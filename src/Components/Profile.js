import React, { useState, useEffect } from 'react';

import { doc, getDocs, collection, deleteDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../config/firebase";
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [profileInfo, setProfileInfo] = useState([])
  const initialUser = {
    name: "Kenth",
    phone: "0674321256",
    email: "Example@gmail.com",
    address: "12th st",
  };
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(initialUser);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = async () => {
    try {
      const authUser = getAuth().currentUser;
      // Update the Firestore document with the new user information
      await updateDoc(doc(db, "test" + authUser.email, profileInfo[0].id), {
        Name: user.name,
        Email: user.email,
        Number: user.phone,
        Address: user.address,
      });
      // Update the local state with the new user information
      setProfileInfo([
        {
          ...profileInfo[0],
          Name: user.name,
          Email: user.email,
          Number: user.phone,
          Address: user.address,
        },
      ]);
      setIsEditing(false);
    } catch (error) {
      alert('Error updating profile: ' + error.message);
      console.error("Error updating profile: ", error);
    }
  };
  const handleCancelClick = () => {
    setUser(initialUser);
    setIsEditing(false);
  };
  const authUser = getAuth().currentUser;
  const fetchUser = async () => {
    try {
      const authUser = getAuth().currentUser; // Add this line
      const querySnapshot = await getDocs(
        collection(db, "Cart" + authUser.uid)
      );
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProfile(newData);
      console.log(newData);
    } catch (error) {
      alert("error");
      console.error("Error fetching menu: ", error);
    }
  };
  const handleProfileInfo = async () => {
    try {
      const authUser = getAuth().currentUser;
      if (authUser) {
        const querySnapshot = await getDocs(collection(db, "test" + authUser.email));
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log(newData)
        setProfileInfo(newData);
      }
    } catch (error) {
      alert('error');
      console.error("Error fetching profileInfo: ", error);
    }
  };
  useEffect(() => {
    handleProfileInfo();
  }, []);
  useEffect(() => {
    console.log(profileInfo)
    if (profileInfo && profileInfo.length > 0) {
      console.log(profileInfo[0].Name);
    } else {
      console.log("Profile information not available");
    } // Log the updated profileInfo
  }, [profileInfo]);
  const navigate = useNavigate()
  return (
    <div className="profileContainer">
      <div className="info">
      <div className='container1'>
      <div>
      <h1 style={{ color: "white" }}>User Profile</h1>
      </div>
        <div className="profile-container">
          <h1>Profile</h1>
          {isEditing ? (
            <div className="profile-details">
              <div className="detail"  style={{flexDirection:'row'}}>
                <span className="label">Name:</span>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="detail">
                <span className="label">Phone No.:</span>
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="detail">
                <span className="label">Email:</span>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="detail">
                <span className="label">Address:</span>
                <input
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="buttons">
                <button className="btn2" onClick={handleSaveClick}>Save</button>
                <button className="btn2" onClick={handleCancelClick}>Cancel</button>
              </div>
            </div>
          ) : (
            <div className="profile-details">
              <div className="detail">
                <span className="label">Name:</span>
                <span className="value">{ profileInfo.length > 0 ? <div>{profileInfo[0].Name}</div>: <div></div>}</span>
              </div>
              <div className="detail">
                <span className="label">Phone No.:</span>
                <span className="value">{ profileInfo.length > 0 ? <div>{profileInfo[0].Number}</div>: <div></div>}</span>
              </div>
              <div className="detail">
                <span className="label">Email:</span>
                <span className="value">{ profileInfo.length > 0 ? <div>{profileInfo[0].Email}</div>: <div></div>}</span>
              </div>
              <div className="detail">
                <span className="label">Address:</span>
                <span className="value">{ profileInfo.length > 0 ? <div>{profileInfo[0].Address}</div>: <div></div>}</span>
              </div>
              <div className="buttons">
                <button className="btn2" onClick={handleEditClick}>Edit</button>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};
export default Profile;