import React, { Component } from 'react'
import HorizontalScroll from 'react-horizontal-scrolling';
import Carousel from 'react-multi-carousel'
import Item from './Item'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  

export default class Test extends Component {
  render() {
    return (
        <div style={{height:20,overflow:'hidden',width:100,overflowX:'auto'}}>
 <HorizontalScroll>

<li>hbdscbsj</li>
<li>hbdscbsj</li>
<li>hbdscbsj</li>
<li>hbdscbsj</li>
 </HorizontalScroll>
      </div>
    )
  }
}
