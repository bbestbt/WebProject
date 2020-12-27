import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Pattani1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Princess GalyaniVadhana Institute Of Cultural Studies</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013070_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013070_3.jpeg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 181 Moo 6, Charoen Pradit Road Mueang Pattani, Pattani Thailand</li>
                <li>Tel : +66 7333 1250</li>
                <li>Opening time : Mon - Fri 9:00 - 16:00 </li>
                <li>Fee : -</li>
                <li>Category : Museums </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Pattani1;

