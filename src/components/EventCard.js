import { Button, Col } from "react-bootstrap";
import React, { useState } from 'react';
import EventInfo from "./EventInfo";
export const EventCard = ({ name, desc, img ,eventid,link,club}) => {

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>

   
    <Col  size={12} sm={6} md={4}>
      <div  className="proj-imgbx">
        <img src={img} />
        <div  className="proj-txtx">
          <h4 >{name}</h4>
          <span>{desc}</span>
          <br/>
          <input
      type="button"
      value="More Info"
      onClick={togglePopup}
    />
        </div>
      </div>
     
    </Col>

    {isOpen && <EventInfo
      content={<>
        <p style={{alignItems:'center'}}>{name}</p>
        <p>Conducted by: {club}</p>
        <img style={{width:400, height:200,margin:'auto'}} src={img}/>
        <h1 style={{margin:'auto',display:'block'}}>{desc}</h1>
       <Button style={{margin:'auto',paddingLeft:50,paddingRight:50}} href={link} target='_blank'>Register</Button>
      </>}
      handleClose={togglePopup}
    />}
    </div>
  )
}
