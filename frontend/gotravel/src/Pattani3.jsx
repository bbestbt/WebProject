import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Pattani3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Hat Ratchadaphisek</h1>
            <div align="center">
                <img src="https://static.smarttravelapp.com/data/pois/1592_ratchadajpg1_1485831253.jpg"  id="touristInfo" ></img>
                <img src="https://static.smarttravelapp.com/data/pois/1592_ratchada_1485831253.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Nong Chik, Pattani Thailand</li>
                <li>Tel : +66 7343 7599</li>
                <li>Opening time : -</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Pattani3;
