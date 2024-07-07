import {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';


const NavBar =() => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect (() =>{
        const onScroll = () => {
            if(window.scrollY > 50){ // height of how much is being scrolled
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll); 
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container className='header'>
        <Navbar.Brand href="#home" className='header_left'>
            {/* <img src={logo} alt="Logo" /> */}
            <p style={{color:'white', fontSize: '25px', fontWeight: 'bold'}}>PKeerthi</p>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse2'>
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'project' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'> 
                <a href="https://www.linkedin.com/in/pkeerthi52/" target= "_blank"> <img src={navIcon1}  alt=""/> </a>
                <a href="https://github.com/premkalyan-keerthi" target= "_blank"> <img src={navIcon4}  alt=""/> </a>
                <a href="https://www.facebook.com/premkalyan234" target= "_blank"> <img src={navIcon2}  alt=""/> </a>
                <a href="https://www.instagram.com/premkalyan_k/" target= "_blank"> <img src={navIcon3}  alt=""/> </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;