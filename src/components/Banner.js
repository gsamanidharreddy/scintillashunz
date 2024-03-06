import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/logo.jpeg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import logo from '../assets/img/mainL.jpeg'
import { Divider } from "@mui/material";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 1000);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Cultural Fest of VNR VJIET" ];
  const period = 800;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section style={{paddingTop: 10, height:'100vh'}} className="banner" id="home">
      <div style={{display:'flex',alignContent:'center'}} className="d-lg-none navbar-text aligh-items-center">
          <a href="/registrations"> <button>Register Now</button> </a>
        </div>
        <div className="d-none d-lg-block" style={{paddingTop:100}}>

        </div>
      <Container>
        
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span style={{marginLeft:20,fontFamily:'Berkshire Swash',fontSize:'40vm'}} className="tagline">Let's get Sintified</span>
                <h1 style={{fontFamily:'Algerian'}} >{``} <span className="txt-rotate"  dataPeriod="300" data-rotate='[ "Cultural", "Fest", "Sintillashunz" ]'><span  className="wrap">{text}</span></span></h1>
                  <p style={{fontFamily:'Caveat Brush'}}>Continuing the Legacy of 20 Years. </p>
                  
                    </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className=""  src="https://res.cloudinary.com/dcmf0pkmq/image/upload/v1677237352/logo_iki0g5.png" alt="Header Img"/>
                <h1 className="tfade-in" style={{fontFamily:'Algerian', fontSize:20,textAlign:'center'}}>April 4th , 5th & 6th</h1>
                   </div>}
            </TrackVisibility>
          </Col>
            </Row>
            
      </Container>
      
    </section>
    
  )
}
