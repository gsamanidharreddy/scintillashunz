import React, { Component } from 'react'

import { useState, useEffect } from "react";
import {findOne} from '../services/timeline.mjs'


export  function TimeLine() {

    
    const yearone = [
        
            "https://res.cloudinary.com/dcmf0pkmq/image/upload/v1677237352/logo_iki0g5.png",
        
    ]

    const yearthree = [
        
            "https://res.cloudinary.com/dcmf0pkmq/image/upload/v1677237352/logo_iki0g5.png",
        
        
            "https://res.cloudinary.com/dcmf0pkmq/image/upload/v1677237352/logo_iki0g5.png",
        
        
    ]

    const yeartwo = [
        
            
        
            "https://res.cloudinary.com/dcmf0pkmq/image/upload/v1677237352/logo_iki0g5.png",
            "https://res.cloudinary.com/dcmf0pkmq/image/upload/v1677237154/sintilogo_djjznb.png",
          
        
            "https://res.cloudinary.com/dcmf0pkmq/image/upload/v1677237352/logo_iki0g5.png"
        
        
    ]
   
    const yearfour = [
        
       
    
        "https://res.cloudinary.com/dcmf0pkmq/image/upload/v1677237154/sintilogo_djjznb.png",
        "https://res.cloudinary.com/dcmf0pkmq/image/upload/v1677237352/logo_iki0g5.png",
        "https://res.cloudinary.com/dcmf0pkmq/image/upload/v1677237352/logo_iki0g5.png",
    
    
    
    
]


    const [loading, setLoading] = useState(false)
    const [year1data, setYear1data] = useState([])
    const [year2data, setYear2data] = useState([])
    const [year3data, setYear3data] = useState([])
    const [year4data, setYear4data] = useState([])


    const fetchData = async () => {
        setLoading(true)

        const res = await findOne("twenty")
        const res2 = await findOne("twentyone")
        const res3 = await findOne("twentytwo")
        const res4 = await findOne("twentythree")
        
        
        setYear1data(res)
        setYear2data(res2)
        setYear3data(res3)
        setYear4data(res4)
        
        
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

   // console.log(year1data.Images);
    if( year1data != 0 ){
        yearone.length=0;
   //   console.log(year1data.Images);
    year1data.Images.forEach(element => {
        yearone.push(element);
    });
    
  //  console.log(yearone);
    }
    if( year2data != 0 ){
        yeartwo.length=0;
        //console.log(year1data.Images);
      year2data.Images.forEach(element => {
       
          yeartwo.push(element);
      });
      
     // console.log(yearone);
      }
      if( year3data != 0 ){
        yearthree.length=0;
        //console.log(year1data.Images);
      year3data.Images.forEach(element => {
       
        yearthree.push(element);
      });
      
   //   console.log(yearone);
      }
      if( year4data != 0 ){
        yearfour.length=0;
        //console.log(year1data.Images);
      year4data.Images.forEach(element => {
       
        yearfour.push(element);
      });
      
   //   console.log(yearone);
      }

    const [year1,setYear1]=useState(true);
    const [year2,setYear2]=useState(false);
    const [year3,setYear3]=useState(false);
    const [year4,setYear4]=useState(false);
    const [cy,setcy]=useState(10);
   


    

    function toogle(id){
        console.log(id);
       
        if(id==2){
            setYear1(false);
            setYear3(false);
            setYear4(false);
            setYear2(true);
            setcy(124);
        }
      else if(id==1){
            setYear1(true);
            setYear3(false);
            setYear4(false);
            setYear2(false);
            setcy(10);
        
        }
        else  if(id==3){
            setYear1(false);
            setYear3(true);
            setYear4(false);
            setYear2(false);
            setcy(238);
        }
        else{
            if(id==4){
                setYear1(false);
                setYear3(false);
                setYear4(true);
                setYear2(false);
                setcy(352);
            }
    
        }


       };

       
    return (
      <div>
        <div style={{height:5,background:'white'}} ></div>
      
        <div className=" py-10 lg:px-16 lg:text-xl relative">
        <h1 className="berkshire  text-6xl  px-10 lg:px-0 relative z-20">Timeline</h1>

        <div className="timeline-div flex pt-11 items-center justify-evenly relative z-20 text-2xl">
        <div>

        
        <svg width="120" height="400">
            <line x1="29" y1="17" x2="29" y2="117" stroke="#FED395" stroke-width="1"></line>
            <line x1="29" y1="131" x2="29" y2="231" stroke="#FED395" stroke-width="1"></line>
            <line x1="29" y1="245" x2="29" y2="345" stroke="#FED395" stroke-width="1"></line>
            
             <circle onClick={() => toogle(1)} class="cursor-pointer" pointnum="1" cx="29" cy="10" r="7px" fill="#ffffff4a" stroke="#FED395"></circle>
            <text x="55" y="18" fill="#FED395">2020</text>
            <circle onClick={() => toogle(2)} class="cursor-pointer" pointnum="2" cx="29" cy="124" r="7px" fill="#ffffff4a" stroke="#FED395"></circle>
            <text x="55" y="132" fill="#FED395">2021</text>
            <circle onClick={() => toogle(3)} class="cursor-pointer" pointnum="3" cx="29" cy="238" r="7px" fill="#ffffff4a" stroke="#FED395"></circle>
            <text x="55" y="246" fill="#FED395">2022</text>
            <circle onClick={() => toogle(4)} class="cursor-pointer" pointnum="4" cx="29" cy="352" r="7px" fill="#ffffff4a" stroke="#FED395"></circle>
            <text x="55" y="346" fill="#FED395">2023</text>
            <circle cx="29" cy={cy} r="7px" fill="#FED395"></circle>
            </svg>   </div>

         
          
           
           
           <div className="scroll-div bg- h-[40vh] lg:h-[60vh] w-[50vw] lg:w-[40vw] overflow-y-auto relative flex flex-wrap justify-center">
              {  year1&& 
            yearone.map((pic) => {
              return (
                <div className="p-3 flex justify-center h-1/2 lg:w-1/2">
                <img className="h-full" src={pic}/>
            </div>
              )
            })
          
           }

{  year2&& 
            yeartwo.map((pic) => {
              return (
                <div className="p-3 flex justify-center h-1/2 lg:w-1/2">
                <img className="h-full" src={pic}/>
            </div>
              )
            })
          
           }

{  year3&& 
            yearthree.map((pic) => {
              return (
                <div className="p-3 flex justify-center h-1/2 lg:w-1/2">
                <img className="h-full" src={pic}/>
            </div>
              )
            })
          
           }
{  year4&& 
            yearfour.map((pic) => {
              return (
                <div className="p-3 flex justify-center h-1/2 lg:w-1/2">
                <img className="h-full" src={pic}/>
            </div>
              )
            })
          
           }

            </div>
  
  
        </div>
        </div>
      </div>
    )
  }


