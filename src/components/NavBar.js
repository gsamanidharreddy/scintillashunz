import { useState, useEffect ,React} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/sintilogo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import MenuLogo from '../assets/img/menuBtn.png';
import './NavCSS/NavCss.css'
import SNavBar from './NavBar/SNavBar';




import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [show,setShow]=useState(false)
  
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (

   
    <div>
 {/* { show && <div className="h-0 w-screen overflow-y-scroll bg-black fixed top-0 z-50" style={{height:'100vh',zIndex:50,backgroundColor:'white'}} >


      <div >
       
      <div stylesheet={"../assests/components/NavCSS.css"} class="navb container">
    <div class="topic">CSS Vertical Tabs.</div>
    <div class="content">
      <input type="radio" name="slider" checked id="home"/>
      <input type="radio" name="slider" id="blog"/>
      <input type="radio" name="slider" id="help"/>
      <input type="radio" name="slider" id="code"/>
      <input type="radio" name="slider" id="about"/>
      <div class="list">
        <label for="home" class="home">
       <img src=""/>
        <span class="title">About VNR VJIET</span>
      </label>
      <label for="blog" class="blog">
        <span class="icon"><i class="fas fa-blog"></i></span>
        <span class="title">About Sintillashnuz</span>
      </label>
      <label for="help" class="help">
        <span class="icon"><i class="far fa-envelope"></i></span>
        <span class="title"></span>
      </label>
      <label for="code" class="code">
        <span class="icon"><i class="fas fa-code"></i></span>
        <span class="title">Code</span>
      </label>
      <label for="about" class="about">
        <span class="icon"><i class="far fa-user"></i></span>
        <span class="title">About</span>
      </label>
      <div class="slider"></div>
    </div>
      <div class="text-content">
        <div class="home text">
          <div class="title">Home Content</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi excepturi ducimus sequi dignissimos expedita tempore omnis quos cum, possimus, aspernatur esse nihil commodi est maiores dolorum rem iusto atque, beatae voluptas sit eligendi architecto dolorem temporibus. Non magnam ipsam, voluptas quasi nam dicta ut. Ad corrupti aliquid obcaecati alias, nemo veritatis porro nisi eius sequi dignissimos ea repellendus quibusdam minima ipsum animi quae, libero quisquam a! Laudantium iste est sapiente, ullam itaque odio iure laborum voluptatem quaerat tempore doloremque quam modi, atque minima enim saepe! Dolorem rerum minima incidunt, officia!</p>
        </div>
        <div class="blog text">
          <div class="title">Blog Content</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tempora, unde reprehenderit incidunt excepturi blanditiis ullam dignissimos provident quam? Fugit, enim! Architecto ad officiis dignissimos ex quae iusto amet pariatur, ea eius aut velit, tempora magnam hic autem maiores unde corrupti tenetur delectus! Voluptatum praesentium labore consectetur ea qui illum illo distinctio, sunt, ipsam rerum optio quibusdam cum a? Aut facilis non fuga molestiae voluptatem omnis reprehenderit, dignissimos commodi repellat sapiente natus ipsam, ipsa distinctio. Ducimus repudiandae fuga aliquid, numquam.</p>
        </div>
        <div class="help text">
          <div class="title">Help Content</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores error neque, officia excepturi dolores quis dolor, architecto iusto deleniti a soluta nostrum. Fuga reiciendis beatae, dicta voluptatem, vitae eligendi maxime accusamus. Amet totam aut odio velit cumque autem neque sequi provident mollitia, nisi sunt maiores facilis debitis in officiis asperiores saepe quo soluta laudantium ad non quisquam! Repellendus culpa necessitatibus aliquam quod mollitia perspiciatis ducimus doloribus perferendis autem, omnis, impedit, veniam qui dolorem? Ipsam nihil assumenda, sit ratione blanditiis eius aliquam libero iusto, dolorum aut perferendis modi laboriosam sint dolor.</p>
        </div>
        <div class="code text">
          <div class="title">Code Content</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore magnam vitae inventore blanditiis nam tenetur voluptates doloribus error atque reprehenderit, necessitatibus minima incidunt a eius corrupti placeat, quasi similique deserunt, harum? Quia ut impedit ab earum expedita soluta repellat perferendis hic tempora inventore, accusantium porro consequuntur quisquam et assumenda distinctio dignissimos doloremque enim nemo delectus deserunt! Ullam perspiciatis quae aliquid animi quam amet deleniti, at dolorum tenetur, tempore laborum.</p>
        </div>
        <div class="about text">
          <div class="title">About Content</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus incidunt possimus quas ad, sit nam veniam illo ullam sapiente, aspernatur fugiat atque. Laboriosam libero voluptatum molestiae veniam earum quisquam, laudantium aperiam, eligendi dicta animi maxime sunt non nisi, ex, ipsa! Soluta ex, quibusdam voluptatem distinctio asperiores recusandae veritatis optio dolorem illo nesciunt quos ullam, dicta numquam ipsam cumque sed. Blanditiis omnis placeat, enim sit dicta eligendi voluptatibus laborum consectetur repudiandae tempora numquam molestiae rerum mollitia nemo. Velit perspiciatis, nesciunt, quo illo quas error debitis molestiae et sapiente neque tempore natus?</p>
        </div>
      </div>
    </div>
  </div>

    
        </div>
      
    </div>}
    */}
    {show&&
      <Container style={{height:'100vh'}}>
      <span  >

     
<h1  onClick={()=>setShow(!show)} >Close</h1>
</span>
      <SNavBar/>
      </Container>
      
    
}
    <Router>
      {!show&&<Navbar class='navbar-expand-sm' style={{background:'white',opacity:0.8,padding:0,margin:0}} className={scrolled ? "scrolled" : ""}>
        <Container style={{margin:0}} >
        { /* <Navbar.Brand style={{color:"white" ,fontSize:53,fontFamily:'blackadder-itc-regular'}} href="/">Sintillashunz</Navbar.Brand>
       */ }
        <Navbar.Brand href="#home">

       
       <img src={logo} style={{width:'244px', height:50,padding:0}} alt="" />
       </Navbar.Brand>
       <span className="navbar-text">

     
       <img  id='menuBtn' style={{height:50,width:50}}  onClick={()=>setShow(!show)} src={MenuLogo}/>
       </span>
        </Container>
        
      </Navbar>}
      
    
    </Router>
    </div>
  )

  

}




