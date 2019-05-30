import React, {Component} from 'react';
import './BaseLayout.css';
import {Register} from './Register'
import {Link, NavLink} from 'react-router-dom'
import { Nav,Navbar} from 'react-bootstrap'




export class Menu extends Component {

    render() {
      return (
        <Navbar className = "menuColor" expand="lg">
          <Navbar.Brand href="/" className="textcolor">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            {/* <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/register" className="link">rr</NavLink> */}
              <Nav.Link href="/Register" className="textcolor">Register</Nav.Link>
              <Nav.Link href="/login" className="textcolor">Login</Nav.Link>
              <Nav.Link href="/schedule" className="textcolor">View Schedule</Nav.Link>
              <Nav.Link href="/Weather" className="textcolor">Weather</Nav.Link>
              <Nav.Link href="/Nutrition" className="textcolor">Nutrition Facts</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        
        // <ul className="menu">
        // <li><NavLink to="/" className="link">Home</NavLink></li>
        // <li><NavLink to="/view-all-receipes" className="link">View All Recipe</NavLink></li>
        // <li><NavLink to="/add-receipe" className="link">Add Receipe</NavLink></li>
        // </ul>
      )
    }
  }
  
  export class Footer extends Component {
  
    render() {
      return (
        <div className="footer">Copyright 2019</div>
      )
    }
  
  }
  
  export class BaseLayout extends Component {
  
    render() {
      return (
        <div className = "baselayout">
             <div className='content-wrap'>
                <Menu />
                {this.props.children} 
                <Footer />
          </div>
        </div>
      )
    }
  
  }