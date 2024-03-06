import React, { Component } from 'react'
import CSImg from '../assets/img/comingSoon.gif'


export class ProEvents extends Component {
  render() {
    return (
      <div style={{paddingTop:60,background:'black'}}>
        <div  className=" flex pl-6 sm:pr-8 items-center justify-around sm:justify-evenly text-2xl sm:text-3xl h-[54%] md:h-[70%]">
        <img style={{marginLeft:0,display:'block'}} src={CSImg}/>
 
</div>
            </div>
    )
  }
}

export default ProEvents