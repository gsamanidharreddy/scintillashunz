import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { EventCard } from "./EventCard";
import projImg1 from "../assets/img/1.jpeg";
import projImg2 from "../assets/img/2.jpeg";
import { useState, useEffect } from "react";
import projImg3 from "../assets/img/3.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { findAll } from '../services/events.mjs'
import CSImg from '../assets/img/comingSoon.gif'

export const Events = () => {

 

////////////

const [loading, setLoading] = useState(false)
const [start, setStart] = useState(true)
const [events, setEvents] = useState([])

const fetchData = async () => {
    setLoading(true)

    const res = await findAll()

    setEvents([...res])
    setLoading(false)
}

useEffect(() => {
    fetchData()
}, [])

//console.log(events);
//////////



  return (
    <section className="project" id="events">
      <div style={{height:5,background:'white'}} ></div>
      
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div >
              
               <div className={(isVisible) ? "animate__animated animate__fadeIn": ""}>
                <h2 style={{fontFamily:'Berkshire Swash',paddingTop:20}}>Pro Events</h2>
                <p style={{fontFamily:'Josefin Sans',color:'white',fontWeight:400,fontSize:20}}>Experience three whole days of jam-packed fun, friends, and fantastical delight. You don't want to miss these never-forget moments at Sintillashunz 2023</p>
                </div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav style={{fontFamily:'Caveat Brush'}} variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Day 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Day 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Day 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content style={{fontFamily:'Caveat Brush'}} id="slideInUp" /*className={isVisible&&!start ? "animate__animated animate__slideInUp" : ""}*/ >
                  
                    <Tab.Pane eventKey="first">
                    <img style={{width:550,height:300}} src={CSImg}/>
                      <Row>
                        {
                         
                          events.map((project, index) => {
                            if(project.day == 1){
                            return (
                             
                              <EventCard
                                key={index}
                                {...project}
                                />
                            )
                            }
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <img style={{width:550,height:300}} src={CSImg}/>
                    <Row>
                        {
                          events.map((project, index) => {
                            if(project.day == 2){
                            return (
                             
                              <EventCard
                                key={index}
                                {...project}
                                />
                            )
                            }
                          })
                        }
                      </Row>
                       </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <img style={{width:550,height:300}} src={CSImg}/>
                    <Row>
                        {
                          events.map((project, index) => {
                            if(project.day == 3){
                            return (
                             
                              <EventCard
                                key={index}
                                {...project}
                                />
                            )
                            }
                            
                          })
                        }
                      </Row>
                          </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
