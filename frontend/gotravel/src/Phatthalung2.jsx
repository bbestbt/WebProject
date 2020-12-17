import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Phatthalung2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Khao Aok Talu</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013067_1.jpeg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/BzAdKyR6pSqywov9c1tPFGZ08R4fmeb9Eh-WhkuD91v_Py98_YtrPWlWH8g_iki-Fdep_RhWYDjvO0pqX-c5871tsK-v3_AbNijv68c25Q"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 4 Mueang Phatthalung, Phatthalung Thailand</li>
                <li>Tel : +66 7463 4393</li>
                <li>Opening time : 8:30 - 17:00</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Phatthalung2;

