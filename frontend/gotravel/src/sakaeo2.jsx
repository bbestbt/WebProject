import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class sakaeo2 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Namtok Pang Sida</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004479_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004479_2.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004479_3.jpeg"  id="touristInfo" ></img>
                <img src="https://www.thainationalparks.com/img/poi/2014/07/24/62880/forest-trail-w-900.jpg"  id="touristInfo" ></img>
               
               
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Sa Kaeo, Sa Kaeo</li>
                <li>Tel : +66 3724 7948,+66 3731 2282</li>
                <li>Opening time : Everyday 8.30-16.30</li>
                <li>Fee : Foreigners is 200 Baht and children 100 Baht </li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default sakaeo2;

