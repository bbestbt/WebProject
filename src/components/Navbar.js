import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import "../App.css";
import "../index.css";

class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="faded"
          dark
          expand="md"
          fixed={`top`}
          className="navDark"
        >
          <Container>
            <NavbarBrand href="#">Thailand Travel</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                
                {/* <NavItem>
                  <NavLink href="#about">About</NavLink>
                </NavItem> */}
                
                <NavItem>
                  
                  <Link to="/planTripPage"><NavLink href="#plantripBody">Plan trip</NavLink></Link>
                </NavItem>
                <NavItem>
                  
                  <Link to="/planTripPage"><NavLink href="#plantripBody">Promotion</NavLink></Link>
                </NavItem>
                <NavItem>
                <Link to="/addfav"><NavLink href="#servicesBody">Search</NavLink></Link>
                </NavItem>
                <NavItem>
                  <NavLink href="#contactBody">Contact</NavLink>
                </NavItem>

                  <Link to="/Regis"><Button color="success">Login</Button>{" "}</Link>
                
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;