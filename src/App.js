
import './App.css';
import { Routes, Route } from "react-router-dom"
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import Home from './Components/Home';
import ForgotPassword from './Components/ForgotPassword';
import Registration from './Components/Registration';
import Room from './Components/Room';
import Description from './Components/Description';
import ContactUs from './Components/ContactUs';
import Features from './Components/Features';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={ <Welcome/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="/forgotpassword" element={ <ForgotPassword/> } />
        <Route path="registration" element={ <Registration/> } />
        <Route path="/room" element={ <Room/> } />
        <Route path="/description" element={ <Description/> } />
        <Route path="/contact" element={ <ContactUs/> } />
        <Route path="/features" element={ <Features/> } />
      </Routes>
    </div>
  );
}

export default App;
