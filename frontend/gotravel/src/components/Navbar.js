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
      isOpen: false,
     login: false
    };
    this.changeState = this.changeState.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  changeState = () => {
    this.setState({
      login:!this.state.login
    });
  };

  render() {
    // const { login } = this.props.login;
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
            <Link to ="/home"><NavbarBrand >Thailand Travel</NavbarBrand></Link>
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
                  
                  <Link to="/Promo"><NavLink href="#plantripBody">Promotion</NavLink></Link>
                </NavItem>
                {/* <NavItem>
                <Link to="/addfav"><NavLink href="#servicesBody">Search</NavLink></Link>
                </NavItem> */}
                <NavItem>
                  <NavLink href="#contactBody">Contact</NavLink>
                </NavItem>

                  <Link to="/login"><Button onClick={this.changeState} color="success">{this.state.login ? "Login" : " Log out"}</Button></Link>
                
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;