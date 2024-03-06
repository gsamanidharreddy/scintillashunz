import React, { Component } from 'react'
import  { useState } from 'react';
import ClubEvent from './ClubEvent';
import CSImg from '../assets/img/comingSoon.gif'

export function  ClubEvents() {
 
    const [checkClub, setCheckClub] = useState(0);
   
    

    function setClub(id){
        setCheckClub(id);
    }
    const clubs=[
        
        {
            index:0,
            name:'Art of Living',
            about: "AOL(Art of living) focuses on promoting mental and physical health, empowering youth with opportunities to learn and build their people skills through organizing various events.\nThe club focuses on helping people build self-awareness, confidence, focus, interpersonal skills and leadership qualities by organizing several workshops.  One of the main motives of the club is to educate students on overcoming pressure and challenges often faced by the youth of this age. In addition, we arrange various social service activities to help society and make a difference in someone’s life.",
            reg1:80,
            reg2:100,
            note:"null",
        },
        {
            index:1,
            name:'Creative Arts',
            about: "Creative arts - the arts Club of VNRVJIET which creates bonds with the community through arts, and expresses concerns or issues through artistic practices. We are an inclusive and progressive community. Art has been a part of life for as long as humanity has existed. Art is something that captures the eyes. We as artists try to inspire people, communicate ideas and emotions through our works. Creative arts is one such group which includes fine art, sketching and many other things. Creative arts is a rainbow term describing different styles of art. Throughout the year, creative arts has conducted many events which encouraged students to explore their creative and artistic side. Events promote and create awareness about new art forms and craft techniques.",
            reg1:100,
            reg2:200,
            note:"null",
        },
       
        {
            index:2,
            name: 'Cresendo',
            about:"Crescendo is the Music club of VNRVJIET.It is the oldest and one of the most active club of VNRVJIET. The club is dedicated to promoting music and organizing musical events and activities on campus. As a music club, Crescendo will organize concerts, jamming sessions, competitions, workshops, and other music-related events for students. Members of the club include singers, musicians, songwriters, and music enthusiasts who share a common interest in music. Since its establishment the club always strives to excel in music and has been taking the college to a top notch level.The club provides opportunities for students to collaborate and create music together, explore different genres and styles of music, and develop their skills as performers and musicians. Overall, the Crescendo Music Club provides a platform for students to express themselves musically, showcase their talents.",
            note: "Note : <br>ALL EVENT PASS (for solos) : ₹ 200/-   <br>Through this pass one can participate in all the 4 solo competitions.",
            reg1:null,
        },
        {
            index:3,
            name:'Dramatrix',
            about:"The Drama Club of VNRVJIET is a cultural club that comprises of actors, scriptwriters and creatives who have a keen interest in various forms of dramatics and more are eager enough to express themselves. It performs street plays, stage plays, mimes, etc on various events. The club believes that drama is not just about acting, it's much more than that. It's a way to express oneself, a form of expression.",
            note:"null",
        },
        {
            index:4,
            name:'Livewire',
            about:"Livewire crew is an all style collegiative dance crew from VNR VJIET that seeks to promote all the hip hop and western dance styles.They perform on various genres of music and represent the vintage as well as the modern culture representing our Telugu states .They have been very dedicated and loyal to dance since the year of establishment. They have been constantly setting the bars higher year by year. Livewire has brought VNR not only a level of dignity in the field of dance but the respect that is nothing less than any other University . Livewire is the most active club that never steps back from bringing a change in the society with their creative and thoughtful performances .",
            note:"null",
        },
        {
            index:5,
            name:'Nrithyatarang',
            about:"Nrithya Tarang is the classical dance club of VNR VJIET that seeks to promote all the Indian classical dance forms. They perform catchy new age songs that attract the attention of the audience, while still remaining true to their roots of classical dance. Though the club was established a few years ago, they have come a long way and have made multiple people change their mind about Indian dance forms.",
            note:"null",
            reg1:60,
            reg2:120,
        },
        {
            index:6,
            name:'విజ్ఞానజ్యోతి సాహితీవనం',
            about:"విజ్ఞానజ్యోతి  సాహితీవనం మన కళాశాల యొక్క తెలుగు ప్రేమికుల కూటమి. కాలానుగుణంగా నేటి తరం మర్చిపోతున్న మన మధురమైన తెలుగు భాషను గుర్తించి దాని యొక్క విశిష్ఠతను చాటడమే ఈ  కూటమి ముఖ్య లక్ష్యం. వీళ్ళు తెలుగుకి సంబంధించి ఎన్నో కార్యక్రమాలు నిర్వహించారు. తెలుగు భాషా దినోత్సవాన్ని  పురస్కరించికోని వీళ్ళు “అక్షర “ అనే పేరుతో సాహితీ మహోత్సవాలను ఘనంగా జరిపారు. \nఅదే ఉత్సాహంతో ఈ స్సింటిలేషన్స్ లో మరి కొన్ని ఉత్తేజకరమైన , ఉల్లాసకరమైన మరియు లాభదాయకమైన కార్యక్రమాలతో మన ముందుకు వచేస్తుంది విజ్ఞానజ్యోతి సాహితీవనం.",
            note:"null",
        },
        {
            index:7,
            name:'Scintillate',
            about:"Scintillate is the photography club of VNRVJIET which aims at capturing the moment that one would like to cherish for the rest of their life. The club not just focuses on appreciating the talent which is already present but also encourages people who have a vision on identifying beauty within small things. They not just provide an environment for students to show their skills but they are there for the students who want to learn, by conducting various photography workshops every year. There are various departments in this club which includes photography,videography, editing and event organising, etc. It’s an amazing platform for one to showcase their talent and vision.",
            note:"null",
            reg1:50,
            reg2:100,
        },
        {
            index:8,
            name:'Stentorian',
            about:"Will be Updated Soon..!",
            note:"null",
        },
        {
            index:9,
            name:'VJ Teatro',
            about:"VJ Teatro is the largest short film making club in Telangana. It consists of all the departments which are involved in a film making process such as acting, direction, script writing, direction of photography, editing, production management, social media and meme. The club acts as a great platform to raise awareness on various trending topics through an entertainment domain. The club proudly holds numerous  awards received from many short film contests. ",
            note:"null",
        },
       
        


    ]

    return (
      <div  style={{paddingLeft:20,background:'black'}} >

        
        <div className="  bg-black     ">

        <h1 style={{fontSize:60,paddingTop:10,paddingLeft:5}} className="heading berkshire text-7xl vs:text-8xl text-golden  lg:text-[10rem] relative z-10">Club Events</h1>
       
       <div>

        <div  className=" justify-evenly pb-10 relative top-[0px] " style={{paddingTop:10}}>

       { clubs.map((club, id) => {
                            
                            return (
                             
                                <button onClick={() => setClub(club.index)} style={{padding:10,margin:5}} className="rounded text-[.75rem] josefinFont leading-relaxed  text-lg flex-wrap bg-white text-black">{club.name}</button>
           
                               
                                 )
                            
                          })}

               </div>

        <div>

        { clubs.map((club, id) => {
                            
                            if(club.index==checkClub){
                            return (
                             
                              
                                <ClubEvent key={id} {...club}/>
                               
                                 );
                            }
                            
                          })}

                          
      
       </div>
       </div>
       
    {/*

      
       <div style={{display:'flex',alignContent:'center',height:checkClub===3 || checkClub===8 ? 0:null,overflow:'hidden' }} className="d-lg-none navbar-text aligh-items-center">
       <img style={{marginBottom:20, marginLeft:0}} src={CSImg}/>
   </div>

    
       <div style={{height:checkClub===3 || checkClub===8 ? 0:null,overflow:'hidden'}} className="d-none d-lg-block flex pl-6 sm:pr-8 items-center justify-around sm:justify-evenly text-2xl sm:text-3xl h-[54%] md:h-[70%]">
     <img style={{marginBottom:20,height:400, marginLeft:0}} src={CSImg}/>
 
</div>
 */}
        </div>

      </div>
    )
  
}
