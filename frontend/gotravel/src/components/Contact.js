import React, { Component } from "react";
import {Row, Col, Button } from "reactstrap";
import "../App.css";
import { ReactComponent as Phone } from "../assets/svg/phone.svg";
import { ReactComponent as MapPin } from "../assets/svg/map-pin.svg";
import { ReactComponent as Mail } from "../assets/svg/mail.svg";

class Contact extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="contactBody">
          <header className="headerTitle text-center">
            <h1>Contact</h1>
          </header>
          <section className="svg-group text-center">
            <Row>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Phone width="50" height="55" strokeWidth="1" />
                  <p>02 xxx xxxx</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <MapPin width="55" height="55" strokeWidth="1" />
                  <p>Thailand Bangkok</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Mail width="55" height="55" strokeWidth="1" />
                  <p>6109xxxx@kmitl.ac.th</p>
                </div>
              </Col>
            </Row>
          </section>
          <hr />
          <br />
          <section className="msg text-center">
            <form action="">
              <Row>
                <Col sm="6">
                  <input
                    type="text"
                    name="Name"
                    id="reviewer-name"
                    placeholder="Your Name"
                    required
                  />
                  <br />
                  <input
                    type="email"
                    name="Email"
                    id="reviewer-email"
                    placeholder="Your email"
                    required
                  />
                </Col>
                <Col>
                  <textarea
                    name="Message"
                    id="reviewer-message"
                    rows="4"
                    placeholder="Your Message"
                  />
                  <Button outline color="light" className="float-left">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </form>
          </section>
      </div>
    );
  }
}

export default Contact;