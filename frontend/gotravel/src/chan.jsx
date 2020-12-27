import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class chan extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Chanthaburi</h1>
        </div>

        <div class="placeProvince">
        <Link to="/chan1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013940_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Thong Thua</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/chan2"> <img src="https://blog.takemetour.com/wp-content/uploads/2018/01/Khao-Khitchakut-National-Park-The-otherworldly-scenery-at-Khao-Phra-Bat.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khao Khitchakut National Park</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/chan3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P01000029_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Gems Market</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/chan4"> <img src="https://www.khaosok.com/wp-content/uploads/2018/11/Namtok-Phlio-National-Park.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Namtok Phlio National Park</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default chan;
