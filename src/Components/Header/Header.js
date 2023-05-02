import React from 'react'
import './Header.css'
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <img className='netflix' src='https://img.icons8.com/color/1x/netflix.png' alt=''></img>
            <Link  className='home' to="/home">Home</Link>
            <Link id='nav-links' to="/popular">Popular Movies</Link>
            <Link id='nav-links' to="/latest">Latest Movies</Link>
            <Link id='nav-links' to="/comic">Comedy Movies</Link>
           
          </Nav>
        </Container>
      </Navbar>
     
       
    </div>
  )
}

export default Header