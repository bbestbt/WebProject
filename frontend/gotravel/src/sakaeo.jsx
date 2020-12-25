import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class sakaeo extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
        <div id="provinceName">
            <h1 align="center"> Sa Kaeo </h1>
        </div>

        <div class="placeProvince">
        <Link to="/sakaeo1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013988_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Lalu</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/sakaeo2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004479_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Namtok Pang Sida</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/sakaeo3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013990_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Nakorntum</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/sakaeo4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007318_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Prasat Sadok Kok Thom</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default sakaeo ;
