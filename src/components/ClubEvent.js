import React from "react";
import "./ClubEvent.css";

import parse from 'html-react-parser';
import  { useState,useEffect } from 'react';
import { findAll } from '../services/clubevents.mjs'
import { CEventInfo } from "./CEventInfo";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import HorizontalScroll from "react-horizontal-scrolling";
function ClubEvent({ ...club }) {
  
  const [clubEvents, setClubEvents] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)

    const res = await findAll()

    setClubEvents([...res])
    setLoading(false)
}

useEffect(() => {
    fetchData()
}, [])



return (
  <div className="" >

  <div className="josefinFont sub_heading font-cinzel text-4xl vs:text-6xl text-golden font-bold" style={{paddingTop:0}}>{club.name}</div>

  <div className="clubEventInner">
    
   <div className="clubEventWrapper">

   </div>
  
   <div className="hidden sm:flex justify-center h-[] ">
  
    <p style={{fontSize:16,fontFamily:"Josefin Sans",wordSpacing:4.5,lineHeight:2,paddingTop:10}}>{club.about}</p>
   </div>

   <div  className="d-lg-none navbar-text aligh-items-center" style={{paddingRight:15,paddingLeft:5}}>
   <p style={{fontSize:12,fontFamily:"Josefin Sans",wordSpacing:1.5,lineHeight:1.2,paddingTop:10}}>{club.about}</p>

    </div>
  <div style={{width:'100%',border:'13px',overflowX:'scroll',overflowY:'hidden',whiteSpace:'nowrap'}}>
      



  { clubEvents.map((clubEvent, id) => {
                            
                            if(club.index==clubEvent.index){
                            return (
                             
                               <CEventInfo key={id} {...clubEvent}/>
                               
                               
                                 );
                            }
                            
                            
                          })}

                          </div>

                          <div style={{alignContent:'center', margin:'auto',left:"50%"}}>

        
<table style={{alignContent:'center', margin:'auto',left:"50%",color:"white",visibility:club.reg1!=null?'visible':'hidden'}}>
<tr>
<th>Registration fee:</th>
<th></th>

</tr> 
<tr>
<th></th>
<th>₹{club.reg1}/- for one Event </th>

</tr>
 <tr>
 <th></th>
<th>₹{club.reg2}/-  for all Events</th>


</tr> 



</table>
<div style={{alignContent:'center', margin:'auto',left:"50%",color:"white", visibility:club.note!="null"?'visible':'hidden'}}>
  
  <p style={{color:'white',fontSize:20}}><b>{parse(club.note)}</b></p>
</div>
</div>            


</div>
</div>
);



}

export default ClubEvent;