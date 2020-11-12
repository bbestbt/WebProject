import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import Data from "./data.json"
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class tak1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Mae Kasa Hot Spring</h1>
            <div align="center">
                <img src={require("./west/maekasa.jpg")} alt="mae kasa" id="touristInfo" ></img>
                <img src={require("./west/tak12.jpg")} alt="mae kasa" id="touristInfo" ></img>
                <img src={require("./west/tak13.jpg")} alt="mae kasa" id="touristInfo" ></img>
                <img src={require("./west/tak14.jpg")} alt="mae kasa" id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mae Kasa Subdistrict, Mae Sot 63110 Thailand</li>
                <li>Tel : +66 5551 43413</li>
                <li>Opening time : Everyday at 06:00 - 18:00</li>
                <li>Fee : - Baht</li>
                <li>Category : Nature </li>
            </ul>


        </div>
        </div>

        

       
        
        );
    }
}
 
export default tak1;
