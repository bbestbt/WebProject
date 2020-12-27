import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class UthaiThani1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Uposatharam</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012823_1.jpeg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/p/AF1QipOoc1_YnzG7_rgUaEQAbeuypk6cju5B9yS0o56R"  id="touristInfo" ></img>
               
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 34 Moo 1 Mueang Uthai Thani, Uthai Thani</li>
                <li>Tel : +66 5698 0220</li>
                <li>Opening time : 08:00 - 18:00</li>
                <li>Fee : - Baht</li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default UthaiThani1;

