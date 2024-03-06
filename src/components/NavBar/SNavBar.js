
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { useState, useEffect ,React} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '/Users/samanidharreddygurram/Projects/Web/Scintillashunz/src/assets/img/sintilogo2.png';

import { HashLink } from 'react-router-hash-link';
import MenuLogo from '../menu.gif'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
 
import { color } from '@mui/system';

export  function SNavBar() {
  const FireBall = "https://res.cloudinary.com/dcmf0pkmq/image/upload/v1677237142/fireball_hjs7ul.gif";
  const [height, setHeight] = useState(0)
  
    const [show,setShow]=useState(false)
  
  const anchor='top';
  const list = (anchor) => (
<div>

     
<button style={{float:'right',paddingRight:20,paddingTop:10, fontSize:25}} onClick={()=>setShow(!show)} >Close</button>

    <div  className="  bg-white   text-black" style={{height:'100vh',zIndex:50,paddingTop:150}}>
       
     
       
<div className=" flex pl-6 sm:pr-8 items-center justify-around sm:justify-evenly text-2xl sm:text-3xl h-[54%] md:h-[70%]">

    <div className="flex flex-col w-1/3 lg:w-1/5">

    

      <div className="flex flex-col">
       
          <div className="py-4 flex items-center" >
            <img style={{width:40,padding:0,height:40}} src={FireBall}/>
            <a href='/aboutVnr'>  <button style={{marginTop:19,fontSize:22}} >
              AboutVNRVJIET
            </button></a>
          </div>

          <div className="py-4 flex items-center" >
          <img style={{width:40,padding:0,height:40}} src={FireBall}/>
           
          <a href='/aboutSinti'>  <button style={{marginTop:19,fontSize:22}} >
          AboutSinti
        </button> </a>
      </div>
      <div className="py-4 flex items-center" >
      <img style={{width:40,padding:0,height:40}} src={FireBall}/>
           
      <a href='/clubEvents'>  <button style={{marginTop:19,fontSize:22}}>
          ClubEvents
        </button>
        </a>
      </div>
      <div className="py-4 flex items-center" >
      <img style={{width:40,padding:0,height:40}} src={FireBall}/>
           
       <a href='/proEvents'> <button style={{marginTop:19,fontSize:22}} >
          ProEvents
        </button></a> 
      </div>
      <div className="py-4 flex items-center" >
      <img style={{width:40,padding:0,height:40}} src={FireBall}/>
           
       <a href='/sponsors'> <button style={{marginTop:19,fontSize:22}} >
          Sponsorship
        </button></a> 
      </div>
      </div>
      
      </div>

          <div className="w-1/2 sm:w-3/4 lg:w-1/2 flex flex-col items-center justify-center">

        <div className="hidden sm:flex justify-center h-[] my-5">
          <img style={{height:120,width:290,padding:0}}  src="https://res.cloudinary.com/dcmf0pkmq/image/upload/v1677237352/logo_iki0g5.png"/>
          </div>
          
          </div>

      </div>


    </div>
    </div>
  );

  return (

<div >



   { show && <div>
     
   
         
          <SwipeableDrawer 
            anchor='top'
            open={true}
            
          >
            {list('top')}
          </SwipeableDrawer>
        
    </div>}

    {!show&&
   <div>
     <Navbar className="" style={{
        opacity:0.9,padding:0,margin:0,background:'black'}} >
    <Container style={{paddingRight:20,paddingRight:10}} >
      <Navbar.Brand  href="">
        <a href='/home'>
      <img  src={logo} style={{width:'244px', height:50,padding:0,margin:0}} alt="" />
      </a>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text style={{padding:0,margin:0}}  >
       
     <a href='/registrations'><button className='d-none d-lg-block' style={{padding:10,marginRight:30}}>Register Now</button></a> 
     <div style={{padding:0}}>

     
     
<img  id='menuBtn' style={{height:35,width:40, padding:0,margin:0}}  onClick={()=>setShow(!show)} src="https://res.cloudinary.com/dcmf0pkmq/image/upload/v1677511325/image_gplgin.png"/>
<h1 style={{fontSize:14,color:'white',padding:0,margin:0, textAlign:'center'}}>Menu</h1>
</div>

        </Navbar.Text>
      </Navbar.Collapse>
    
    </Container>
    
  </Navbar>
  <div style={{background:'firebrick',height:0.8,marginTop:62,zIndex:10}}/>
  </div>
    
      }
     
    </div>

    
  );
}