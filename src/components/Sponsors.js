import React, { Component } from 'react'
import img1 from '../assets/img/broch1.jpg'
import img2 from '../assets/img/broch2.jpg'

export class Sponsors extends Component {
  render() {
    return (
      <div>
        
      <div style={{alignContent:'center',display:'block',alignItems:'center',paddingTop:20}} className='josefinFont'>
      <h1 style={{textAlign:'center'}}>Sponsorship Brochure</h1>
      </div>
<div>
  <img src={img1}/>
</div>
<div>
  <img src={img2}/>
</div>


      </div>
    )
  }
}

export default Sponsors