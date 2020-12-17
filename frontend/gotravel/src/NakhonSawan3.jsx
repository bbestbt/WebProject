import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class NakhonSawan3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Cultural Center Of Nakhon Sawan</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013601_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.museumthailand.com/upload/slide/1490777593_6431.png"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Nakhon Sawan, Nakhon Sawan Thailand</li>
                <li>Tel : +66 5651 4982</li>
                <li>Opening time : 9:00 - 15:00</li>
                <li>Fee : - </li>
                <li>Category : Museums </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default NakhonSawan3;

