import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SuphanBuri1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Sam Chuk Old Market</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03003386_1.jpeg"  id="touristInfo" ></img>
                <img src="https://static.smarttravelapp.com/data/pois/3296_samchuk_1490087484.jpg"  id="touristInfo" ></img>
           
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Sam Chuk, Suphan Buri</li>
                <li>Tel : +66 3557 1571 </li>
                <li>Opening time :  08:00 - 16:00</li>
                <li><span>Fee : - Baht </span></li>
                <li>Category : Local Experience</li>
            </ul> 
        </div>
        </div>
        );
    }
}
 
export default SuphanBuri1;
