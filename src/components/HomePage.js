import React, { Component } from 'react'
import AboutUs from './AboutUs'
import { Banner } from './Banner'
import { Events } from './Events'
import Test from './Test'
import SlickSlider from './Test'
import {TimeLine} from './TimeLine'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <AboutUs/>
       
       
        <Events/>
        
        <TimeLine/>
      </div>
    )
  }
}
