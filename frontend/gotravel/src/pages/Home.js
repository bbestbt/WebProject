import React, { Component } from "react";
import "../App.css";
import Home1 from "../components/Home1";
import About from "../components/About";
import Footer from "../components/Footer";
import Province from '../province'
class Home extends Component {
  render() {
    return (
      <div id='home'>
        <Home1 />
        <About />
        <Province/>
        <Footer />
      </div>
    );
  }
}

export default Home;