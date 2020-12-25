import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class surin2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">City Pillar Shrine</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/93/d1/64/bangkok-city-pillar-shrine.jpg"  id="touristInfo" ></img>
                <img src="https://www.tour-bangkok-legacies.com/images/lak-muang-city-pillar-shrine.jpg"  id="touristInfo" ></img>
                <img src="https://hawkebackpacking.com/images/pictures/asia/thailand/bangkok/thailand_bangkok_37.jpg"  id="touristInfo" ></img>
                <img src="https://www.makemytrip.com/travel-guide/media/dg_image/bangkok/Bangkok-City-Pillar-Shrine.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Thetsaban 3 Rd., Nai Mueang, Surin Thailand</li>
                <li>Tel : +66 2 222 9876</li>
                <li>Opening time : 6:30 - 18:00 </li>
                <li>Fee : -</li>
               
                <li>Category : Landmark </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default surin2;

