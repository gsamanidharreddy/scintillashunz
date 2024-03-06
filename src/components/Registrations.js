import React, { Component } from 'react'
import AboutUs from './AboutUs'
import { Banner } from './Banner'
import { Events } from './Events'

export default class Registrations extends Component {
  render() {
    return (
      <div>
        <div style={{paddingTop:10,paddingRight:20}}>
            
            <div  style={{paddingLeft:40}}>
              <h1 className='berkshire' style={{padding:20}}>For Vnr Students</h1>
              <div className='navbar-text'>
            <a href='https://axisbpayments.razorpay.com/sinti2k23' target='_blank'>  <button>Click to Pay</button></a>
              </div>
              
            </div>

            <div style={{float:'right',paddingRight:40}}>
              <h1 className='berkshire' style={{padding:20}}>For Non Vnr Students</h1>
              <div className='navbar-text'>
            <a href='https://axisbpayments.razorpay.com/sinti2k23nv' target='_blank'>  <button>Click to Pay</button></a>
              </div>
              
            </div>
        </div>
       
      </div>
    )
  }
}
