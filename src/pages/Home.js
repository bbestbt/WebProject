import React, { Component } from "react";
import "../App.css";
import Hero from "../components/Hero";
import About from "../components/About";
// import Package from "../components/Package";
// import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NavbarMain from "../components/Navbar";

class Home extends Component {
  render() {
    return (
      <div id='home'>
         <NavbarMain />
        <Hero />
        <About />
        {/* <Package /> */}
        {/* <Services /> */}
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;