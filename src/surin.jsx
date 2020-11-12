import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class surin extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Surin</h1>
        </div>

        <div class="placeProvince">
        <Link to="/surin1"> <img src="https://lh3.googleusercontent.com/proxy/lChJ_RUsotWyX1_aIeMyUR4Gnd6_86MSZkCwFitYd3wUsWllMRGSELkZak5SqIX78GMiEGe5srLOIYFUAv842xMwwb5VrgTMUlUPmxZN9DnjLjEp_FhSAA" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Surin National Museum</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/surin2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013204_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">City Pillar Shrine</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/surin3"> <img src="https://patricklepetit.jalbum.net/SURIN/PHOTOS/MUEANG%20SURIN/Prasat%20Mueang%20Tee/I1122530_resize.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Prasat Mueang Thi </h6>                
        </div>

        <div class="placeProvince">
        <Link to="/surin4"> <img src="https://temple-thai.com/wp-content/uploads/2018/01/wat-burapharam-ubon-ratchathani-2.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Burapharam
</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default surin;
