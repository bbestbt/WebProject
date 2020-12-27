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
  Link,
} from 'react-router-dom';

import "../App.css";
import "../index.css";
import cart from '../cart.png'
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
                
                <NavItem>
                  
                  <Link to="/planTripPage"><NavLink >Recommended trip</NavLink></Link>
                </NavItem>
                <NavItem>
                  
                  <Link to="/Promo"><NavLink>Promotion</NavLink></Link>
                </NavItem>
                <Link to="./Cart">
                <Button><img src={cart} width="20" height="20"></img></Button>
                </Link>

                  <Link to="/login"><Button onClick={this.changeState} color="success">
                    LogIn/Out
                    </Button></Link>
                
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;