
import './App.css';
import { Routes, Route } from "react-router-dom"
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import Home from './Components/Home';
import ForgotPassword from './Components/ForgotPassword';
import Registration from './Components/Registration';
import Room from './Components/Room';
import Description from './Components/Description';
import Features from './Components/Features';
import LoadingPage from './Components/LoadingPage';
import AdminDashboard from './Components/AdminDashboard'
import ThankYou from './Components/ThankYou';
import Profile from './Components/Profile';


function App() {

  
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={ <Welcome /> } />
        <Route path="home" element={ <Home /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="/forgotpassword" element={ <ForgotPassword /> } />
        <Route path="registration" element={ <Registration /> } />
        <Route path="/room" element={ <Room /> } />
        <Route path="/description" element={ <Description /> } />
        <Route path="/features" element={ <Features /> } />
        <Route path="/loadingPage" element={<LoadingPage />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>

      
    </div>
  );
}

export default App;
