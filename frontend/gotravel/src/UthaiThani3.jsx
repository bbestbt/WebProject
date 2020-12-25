import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class UthaiThani3 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Chantaram</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012820_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.thailandforfarang.com/assets/wat-tha-sung-buddha.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 60 Moo 1, Uthai Thani-Manorom Road Mueang Uthai Thani, Uthai Thani</li>
                <li>Tel : +66 5650 2506 </li>
                <li>Opening time : 09:00 - 16:00</li>
                <li>Fee : - </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default UthaiThani3;

