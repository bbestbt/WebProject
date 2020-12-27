import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class chon2 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Bang Saen Beach</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005245_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005245_2.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005245_3.jpeg"  id="touristInfo" ></img>
                <img src="https://www.pattayamail.com/wp-content/uploads/2015/07/1-7-10Long.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Chon Buri, Chon Buri</li>
                <li>Tel : +66 3838 1278</li>
                <li>Opening time : Everyday 06.00-18.00 </li>
                <li>Fee : - Baht </li>
                <li>Category : Beaches </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default chon2;

