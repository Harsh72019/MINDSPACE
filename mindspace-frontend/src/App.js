// import logo from './logo.svg';
import './App.css';
import Navbarr from './components/Navbar';
// import Contact from './components/Contact';
import Contact from './components/resource/Contact.js'
import Welcome from './components/Welcome';
import Services from './components/Services'
import ChatBot from  './components/ChatBot';
import Footer from './components/Footer';
import Login from './pages/Login';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { AppContext , socket } from './context/appContext';
import Assesment from "./components/resource/Assesment.js"

import { useSelector } from 'react-redux';
import React , { useState  , useEffect , useRef} from 'react';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import VideoPlayer from './pages/VideoPlayer';
import videoBG from './assets/ocean.mp4'
import Resource from "./components/resource/Resource.js"
import CrisisHotline from './pages/CrisisHotline';
import About from './components/About';
import SideNavbar from './components/SideNavbar';
import { motion } from "framer-motion";
// import { useFollowPointer } from "./use-follow-pointer";

function App() {
  const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState([]);
    const [members, setMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [privateMemberMsg, setPrivateMemberMsg] = useState({});
    const [newMessages, setNewMessages] = useState({});
     const ref = useRef(null);
    const user = useSelector((state) => state.user);
    const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };
  return (
    <AppContext.Provider value={{ socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages }}>
    <BrowserRouter>
    <div className="min-h-screen">
      <div >
       
        <Navbarr />
        {/* <SideNavbar/> */}
        
       
        <video src={videoBG} autoPlay loop muted className="w-full h-[111vh] absolute top-0 video"/> 
        
        
      </div >
      <div ref={ref}  />
      <Routes >
          <Route exact path="/" element={<Welcome/>} />
          <Route  path='/Login' element={<Login/>}  onClick={handleClick}/>
          <Route  path='/Signup' element={<Signup/>}  onClick={handleClick}/>
          <Route  path='/About'  element={<About/>}onClick={handleClick}/>
          <Route  path='/chat' element={<Chat/>}  onClick={handleClick}/>
          <Route  path='/Services'  onClick={handleClick}/>
          <Route path='/chatbot' element={<ChatBot/>} onClick={handleClick}/>
          <Route path='/player' element={<VideoPlayer/>} />
          <Route path='/assesment' element={<Assesment/>} />
          <Route path='/resource' element={<Resource/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/hotline' element={<CrisisHotline/>} />
          
          {/* <Route path='/contactus' element={} /> */}
          
        </Routes>
      
    </div>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
