import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SingBuri2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Kudi Thong</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004974_1.jpeg"  id="touristInfo" ></img>
                <img src="https://static3.bigstockphoto.com/3/7/3/large1500/373087018.jpg"  id="touristInfo" ></img>
             
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address :Moo 3 Highway 32 Km.125-126 Phrom Buri, Sing Buri</li>
                <li>Tel :+66 3651 1900,+66 3651 2230</li>
                <li>Opening time : 08:00 - 19:00</li>
                <li>Fee : - Baht </li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>
        );
    }
}
 
export default SingBuri2;
