import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SuphanBuri3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Don Chedi Monument</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000398_1.jpeg"  id="touristInfo" ></img>
                <img src="https://patricklepetit.jalbum.net/SUPHANBURI/PHOTOS/DON%20CHEDI/Don%20Chedi%20Monument/L0813628_resize.jpg"  id="touristInfo" ></img>
           
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Don Chedi, Suphan Buri</li>
                <li>Tel : - </li>
                <li>Opening time : 06:00 - 18:00</li>
                <li>Fee : -</li>
                <li>Category : Art, Culture, Heritage</li>
            </ul> 
        </div>
        </div>

        );
    }
}
 
export default SuphanBuri3;
