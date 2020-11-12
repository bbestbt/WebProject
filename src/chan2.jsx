import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class chan2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Khao Khitchakut National Park</h1>
            <div align="center">
                <img src="https://blog.takemetour.com/wp-content/uploads/2018/01/Khao-Khitchakut-National-Park-The-otherworldly-scenery-at-Khao-Phra-Bat.jpg"  id="touristInfo" ></img>
                <img src="http://thailandscanme.developerinhouse.com/images/upload/cti006/cti006-03-l.jpg"  id="touristInfo" ></img>
                <img src="http://thailandscanme.developerinhouse.com/images/upload/cti006/cti006-06-l.jpg"  id="touristInfo" ></img>
                <img src="http://thailandscanme.developerinhouse.com/images/upload/cti006/cti006-08-l.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Khoa Khitchakut, Chanthaburi</li>
                <li>Tel : +66 3945 2074</li>
                <li>Opening time : Everyday 06.00-18.00 </li>
                <li>Fee : Foreigner adult 200 Baht and child 100 Baht </li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default chan2;

