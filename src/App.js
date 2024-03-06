import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SNavBar } from "./components/NavBar/SNavBar";
import { Banner } from "./components/Banner";
import { Events } from "./components/Events";
import { Footer } from "./components/Footer";
import AboutUs from './components/AboutUs';
import {ClubEvents} from './components/ClubEvents';
import { Route, Routes } from 'react-router-dom';
import Registrations from './components/Registrations';

import HomePage from './components/HomePage';
import ProEvents from './components/ProEvents';
import './index.css'
import AboutVnr from './components/AboutVnr';
import Sponsors from './components/Sponsors';


const splash = document.querySelector(".splash");
const splashg = document.querySelector(".gifImg");
const fadeI = document.querySelector(".imgF");

document.addEventListener("DOMContentLoaded", (e)=>{
  setTimeout(()=>{
    //splashg.classList.add("display-none");
   
    splashg.classList.add("display-none");
   // splashp.classList.remove("display-none");
    fadeI.classList.add("fade-in");
  },4300)
  setTimeout(()=>{
    
    splash.classList.add("display-none");
  },7000)
})


function App() {

  if(window.location.pathname !="/"){
    splash.classList.add("display-none");
   
  }
  return (
 
    
    <div className="App">
     <SNavBar />
       
     
      
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/sponsors" element={<Sponsors/>}/>
      <Route path="/registrations" element={<Registrations/>}></Route>
      
      <Route path="/clubEvents" element={<ClubEvents/>}/>
      <Route path="/proEvents" element={<ProEvents/>}/>
      <Route path="/aboutSinti" element={<AboutUs/>}/>
      
      <Route path="/aboutVnr" element={<AboutVnr/>}/>
      
      </Routes>
      
      
     
   
    </div>
    
  );
}

export default App;
