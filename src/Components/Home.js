import React ,{useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.png";
import img1 from "../Assets/images/elegant-hotel-room-with-window.jpg";
import img2 from "../Assets/images/modern-luxury-bedroom-suite-bathroom-with-working-table.jpg";
import img3 from "../Assets/images/interior-modern-comfortable-hotel-room.jpg";
import img4 from "../Assets/images/3d-rendering-luxury-bedroom-suite-resort-hotel-with-twin-bed-living.jpg";
import img5 from "../Assets/images/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int.jpg";
import img6 from "../Assets/images/(Really)-Great (1).jfif";
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import imgAct4 from "../Assets/icons/whatsapp.png";
import imgAct5 from "../Assets/icons/facebook.png";
import imgAct6 from "../Assets/icons/twitter.png";
import imgAct7 from "../Assets/icons/email.png";


const Home = () => {

  const navigation = useNavigate()
   
  const handleSignOut = async () => {
    try {   
      await auth.signOut(); // Sign out the user
      alert('User signed out successfully');
      
      // You can navigate the user to another screen or update your UI as needed
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };


  const [checkIn ,setCheckIn] = useState("");
  const [checkOut ,setCheckOut] = useState("");
  const [number , setNumber] = useState(1);
  const [data, setData] = useState({})

  useEffect(() => {
    setData({
      checkIn : checkIn,
      checkOut : checkOut,
      number : number,    
    })
  })
  
  function goToRoom () {
    navigation("/room",data)
  }

  return (
    <div>
      <div className='divtwo'>
        <div className='nav-bar'>
          <img src={logo} alt="" className='logo' />
          <nav>

            
            <Link to="/features"><button className='link'>Features</button></Link>
            <Link to="/profile" className='link'><button>Profile</button></Link>
            <Link to="/" ><button className='logout' onClick={handleSignOut}>Log Out</button></Link>

          </nav>
        </div>

        <div className='middleDiv'>
          <div className='image-container'></div>
          <div>
            <h2 className='titletext'>Choose Your Perfect Room</h2>
            <p className='text'>We always make sure you are taken care of, you are in great hands
              we have some of the best prices.We have won the HOTEL OF THE YEAR
              AWARD 5 time  in the last 5 years . If you are looking for a 5 STAR luxury
              stay we have the best ratings in the country.
            </p>
          </div>
        </div>
        <div className='KING'>
          <form className='the-form'>
            <div style={{marginRight: "30px",marginLeft: "-190px"}}>
              <h3>Check In</h3>
            <input
              style={{ margin: '0 auto 50px auto', borderColor: '#A87539' }}
              name='class'
              type='date' 
              min={new Date().toISOString().split("T")[0]}
              onClick={(event) => setCheckIn(event.target.value)}
            /></div>
            <div style={{marginRight: "30px"}}>
              <h3>Check Out</h3>
            <input
              style={{ margin: '0 auto 50px auto', borderColor: '#A87539' }}
              name='class'
              type='date'
              min={new Date().toISOString().split("T")[0]}
              onClick={(event) => setCheckOut(event.target.value)}
            /></div>
            <div style={{marginRight: "30px"}}>
            <h3>Number Of People</h3>
            <input
              style={{ margin: '0 auto 50px auto', borderColor: '#A87539' }}
              name='class'
              type='number'
              onClick={(event) => setNumber(event.target.value)}
            /></div>
            <div style = {{marginRight:"-380px", marginBottom: "-50px", marginLeft: "100px"}}>
            <button style={{ margin: '0 auto 50px auto' }} onClick={goToRoom} className='now'>Avalible Rooms</button>
            </div>
          </form>
        </div>
        {/* <h1>This is the home page</h1> */}
      </div>

      <div>
        <h1 className='title2' style={{marginBottom: '180px'}}>Populer Rooms</h1>
        <div className='imagesdiv'>
          <div className='imgdiv1' style={{ marginLeft: "650px" }}>
            <img src={img1} alt="" className='img1' style={{ marginRight: "1rem" }} />
            <img src={img2} alt="" className='img1' style={{ marginRight: "1rem" }} />
            <img src={img3} alt="" className='img1' style={{ marginRight: "1rem" }} />
          </div>

          <div className='imgdiv2' style={{ marginLeft: "650px" }}>
            <img src={img4} alt="" className='img2' style={{ marginRight: "1rem" }} />
            <img src={img5} alt="" className='img2' style={{ marginRight: "1rem" }} />
            <img src={img6} alt="" className='img2' style={{ marginRight: "1rem" }} />
          </div>
        </div>

      </div>


      <div className='therddiv'>
        <h1 className='Featureheader'>About Us</h1>
        <div className='top'>
          <h3 className='subtitles' style={{ textAlign: "center" }}>Welcome to Ethereal Palazzo - Where Luxury Meets Comfort</h3>
          <p className='para' style={{ marginLeft: "700px" }}> At Ethereal Palazzo, we redefine the concept of indulgence and luxury.
            Nestled in the heart of Kimberley/Galeshewe, our 5-star
            hotel is a sanctuary of sophistication and comfort,
            where unparalleled service and opulent accommodations are the norm.</p>
        </div>

        <div className='hit'>
          <div>
            <h3 className='subtitles'>Our Vision: Elevating Your Stay</h3>
            <p className='paragraph'>Our vision at Ethereal Palazzo is to create an unforgettable experience for every guest. From the moment you step into our elegant lobby,you are enveloped in an atmosphere of refined luxury.Our dedicated staff is committed to ensuring your stay is nothing short of extraordinary,
              whether you're here for business, leisure, or a special occasion.</p>
          </div>
          <div className='leftParagraph'>
            <h3 className='subtitles'>Unparalleled Events and Meetings</h3>
            <p className='paragraph'>Planning a corporate event, wedding,or social gathering? Our versatile event spaces are equipped with the latest technology and supported by a team of experienced event planners.Your special occasions become extraordinary at Ethereal Palazzo.</p>
          </div>
        </div>

        <div className='hit2'>
          <div>
            <h3 className='subtitles'>Local Attractions</h3>
            <p className='paragraph'>Conveniently located near [mention nearby attractions],
              our hotel offers easy access to the city’s best cultural,
              shopping, and entertainment experiences. Our concierge
              service is always ready to assist you in exploring
              the vibrant surroundings.
            </p>
          </div>

          <div className='leftParagraph'>
            <h3 className='subtitles'>World-Class Amenities</h3>
            <p className='paragraph'>At Ethereal Palazzo, we leave no stone unturned in
              providing top-notch amenities. Relax by our sparkling pool,
              rejuvenate your senses at our spa and wellness center,
              or maintain your fitness routine at our state-of-the-art gym.
              Our hotel is designed to cater to your every need.
            </p>
          </div>
        </div>
      </div>


      <div className='features'>
        <h1 className='Featureheader'>FEATURES</h1>
        <div className='everyfeature'>
          <div className='mainfeatures'>
            <div className='feature1' style={{ marginRight: "2rem" }}>
              <h1 className='featureText1'>
                Guided tours of nearby historical sites,
                museums, and cultural attractions,
                providing enriching experiences
                for guests.
              </h1>
            </div>

            <div className='feature2' style={{ marginRight: "2rem", marginBottom: "2rem" }}>
              <h1 className='featureText2'>
                We have a driving service that caters to every customer who stays at the Hotel.
                That is one of the reasons why we are world renowned and  respected.
              </h1>
            </div>

            <div className='feature3' style={{ marginRight: "2rem" }}>
              <h1 className='featureText3'>
                Nightly live music performances,
                jazz bands, or classical ensembles
                in the hotel's lounge or courtyard.
              </h1>
            </div>
          </div>

          <div className='mainfeatures2'>
            <div className='feature4' style={{ marginRight: "2rem" }}>
              <h1 className='featureText4'>
                Guided tours of nearby historical sites,
                museums, and cultural attractions,
                providing enriching experiences
                for guests.
              </h1>
            </div>

            <div className='feature5' style={{ marginRight: "2rem" }}>
              <h1 className='featureText5'>
                We serve our clients the best dishes prepared by the best chefs in the world,
                they are at your back end call 24/7 to make sure you enjoy stay.
              </h1>
            </div>

            <div className='feature6' style={{ marginRight: "2rem" }}>
              <h1 className='featureText6'>
                Our Hotel has some of the best activities and facilities.
                We will make your stay more enjoyable for you and your family.
              </h1>
            </div>
          </div>
        </div>
      </div>



      <div className='footer'>
        <div className='contact'>
          <div className='we'>
            <h2 className='text5'>
              For more personal &<br />
              deeper understanding<br />
              of our estabilshment.<br />
              Contact us ON :
            </h2>
          </div>
          <div className='act'>
            <div style={{ flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
              <div className='imgAct4' style={{ width: '50px',height: '50px'}}></div>
              <div>
                <h3 className='most'>+081-453-0011</h3>
              </div>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
              <div className='imgAct5' style={{ width: '50px',height: '50px'}}></div>
              <div>
                <h3 className='most'>@Ethereal-Palazzo.com</h3>
              </div>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
              <div className='imgAct6' style={{ width: '50px',height: '50px'}}></div>
              <div>
                <h3 className='most'>#Ethereal-Palazzo.com</h3>
              </div>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
              <div className='imgAct7' style={{ width: '50px',height: '50px'}}></div>
              <div>
                <h3 className='most'>@Ethereal-Palazzo/real.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home