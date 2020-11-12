import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class sakaeo4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Prasat Sadok Kok Thom</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007318_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007318_2.jpeg" id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007318_3.jpeg"  id="touristInfo" ></img>
                <img src="https://image.routeyou.com/shrink/fit/400x300/85399943e58161b2716a29eff3844ead_b54ff1bd4dbeb03fa1d9ab3e136d3b363798d9a2.jpg"  id="touristInfo" ></img>
               
               
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Khok Sung, Sa Kaeo</li>
                <li>Tel : +66 3731 2282,+66 3731 2284</li>
                <li>Opening time : Everyday 8.30-16.30</li>
                <li>Fee : - Baht </li>
                <li>Category : Art, Culture </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default sakaeo4;

