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
             
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Khao Aok Talu</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013067_1.jpeg"  id="touristInfo" ></img>
                <img src="https://i0.wp.com/thailandlocaltravel.com/wp-content/uploads/2018/10/Khao-Aok-Talu-2-%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%AD%E0%B8%81%E0%B8%97%E0%B8%B0%E0%B8%A5%E0%B8%B8-2.jpg?fit=1701%2C987&ssl=1"  id="touristInfo" ></img>
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

