import React from 'react';
import AboutUs from '../components/AboutUs';
import { Banner } from '../components/Banner';
import { Events } from '../components/Events';
import TimeLine from '../components/TimeLine';

export function Home() {
  return (
    <div>
      
    <Banner />
      <AboutUs/>
      <Events />
      <TimeLine/>

    </div>
  );
}

