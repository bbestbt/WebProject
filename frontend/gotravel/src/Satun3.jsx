import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Satun3 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Nature Wedding</h1>
            <div align="center">
                <img src="https://purewows3.imgix.net/images/articles/2018_07/tree_wedding_hanging_vibes.jpg?auto=format,compress&cs=strip"  id="touristInfo" ></img>
                <img src="https://cdn0.weddingwire.com/img_g/ww/t10_2x_timberlake-earth-sanctuary.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Satun, Satun Thailand</li>
                <li>Tel : - </li>
                <li>Opening time : 6:00 - 18:00</li>
                <li>Fee : - </li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Satun3;

