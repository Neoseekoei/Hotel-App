import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../config/firebase';
import { useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { map } from '@firebase/util';
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";

const Room = () => {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [fourth, setFourth] = useState([]);

   
  const fetchFirstfloor = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "First-Floor"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setFirst(newData);
      console.log(newData);
    } catch (error) {
      alert('error')
      console.error("Error fetching menu: ", error);
    }
  };

  useEffect(() => {
    //getAll();
    fetchFirstfloor();
  }, []);

  const fetchSecond = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Second Floor"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
       setSecond(newData);
      console.log(newData);
    } catch (error) {
      alert('error')
      console.error("Error fetching menu: ", error);
    }
  };

  useEffect(() => {
    //getAll();
    fetchSecond();
  }, []);

  const fetchThird = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Third Floor"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
       setThird(newData);
      console.log(newData);
    } catch (error) {
      alert('error')
      console.error("Error fetching menu: ", error);
    }
  };

  useEffect(() => {
    //getAll();
    fetchThird();
  }, []);


  const fetchFourth = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Fourth Floor"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
       setFourth(newData);
      console.log(newData);
    } catch (error) {
      alert('error')
      console.error("Error fetching menu: ", error);
    }
  };

  useEffect(() => {
    //getAll();
    fetchFourth();
  }, []);

  const navigate =  useNavigate();

  const handleFirst =((first)=>{
    navigate("/description", { state: first });
  })

  const handleSecond =((second)=>{
    navigate("/description", { state: second });
  })

  const handleThird =((third)=>{
    navigate("/description", { state: third });
  })

  const handleFourth =((fourth)=>{
    navigate("/description", { state: fourth });
  })
  

  return (
    <div style={{backgroundColor:'lightgray'}}>
      <h1>AVALIBLE ROOMS</h1>
        <h1 style={{color:'#A87539',marginTop:'140px',textAlign:'center',marginBottom:'300px'}}>FIRST FLOOR</h1>
      <div className='First-Floor' style={{display: 'flex', flexDirection: 'row', width: '300px',marginLeft:'250px', marginTop:'-150px'}}>
        {first.map((first) => (
            <div key={first.id}>
              <img style={{ width: '300px', height: '300px',marginRight:'15rem',borderRadius: '20px' }} src={first.image} alt="first Image" />
              <h2>{first.name}</h2>
              <p >{first.price}</p>
              <button onClick={() => handleFirst(first)}>View More</button>
            </div>
        ))}
      </div>
        <h1 style={{color:'#A87539',marginTop:'140px',textAlign:'center',marginBottom:'300px'}}>SECOND FLOOR</h1>
      <div className='Second-Floor' style={{display: 'flex', flexDirection: 'row', width: '300px',marginLeft:'250px' , marginTop:'-150px'}}>
      
      {second.map((second) => (
          <div key={second.id} style={{}}>
            <img style={{ width: '300px', height: '300px',marginRight:'15rem',borderRadius: '20px' }} src={second.image} alt="second Image" />
            <h2>{second.name}</h2>
            <p>{second.price}</p>
            <button onClick={() => handleSecond(second)}>View More</button>
          </div>
        ))}
      </div>
      <h1 style={{color:'#A87539',marginTop:'140px',textAlign:'center',marginBottom:'300px'}}>THIRD FLOOR</h1>
      <div className='Third-Floor' style={{display: 'flex', flexDirection: 'row', width: '300px',marginLeft:'250px', marginTop:'-150px'}}>
      
      {third.map((third) => (
          <div key={third.id}>
            <img style={{ width: '300px', height: '300px',marginRight:'15rem',borderRadius: '20px' }} src={third.image} alt="third Image" />
            <h2>{third.name}</h2>
            <p>{third.price}</p>
            <button onClick={() => handleThird(third)}>View More</button>
          </div>
        ))}
        
      </div>
        <h1 style={{color:'#A87539',marginTop:'140px',textAlign:'center',marginBottom:'300px'}}>FOURTH FLOOR</h1>
      <div className='Four-Floor' style={{display: 'flex', flexDirection: 'row', width: '300px',marginLeft:'250px', marginTop:'-150px'}}>
        
      {fourth.map((fourth) => (
          <div key={fourth.id}>
            <img style={{ width: '300px', height: '300px',marginRight:'15rem',borderRadius: '20px' }} src={fourth.image} alt="fourth Image" />
            <h2>{fourth.name}</h2>
            <p>{fourth.price}</p>
            <button onClick={() => handleFourth(fourth)}>View More</button>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Room
