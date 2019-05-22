import React, {Component} from 'react';
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
              <Nav.Link href="/view-all-receipes" className="textcolor">ViewAllReceipe</Nav.Link>
              <Nav.Link href="/add-receipe" className="textcolor">Add Receipe</Nav.Link>

              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
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