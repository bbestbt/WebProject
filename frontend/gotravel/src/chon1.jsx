import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class chon1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Khao Sam Muk</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005254_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005254_2.jpeg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ang Sila-Bang Saen Road Mueang Chon Buri, Chon Buri</li>
                <li>Tel : +66 3819 3500</li>
                <li>Opening time : Everyday 06.00-18.00 </li>
                <li>Fee : - Baht </li>
                <li>Category : Local Experience </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default chon1;

