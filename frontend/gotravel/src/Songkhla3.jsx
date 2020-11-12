import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Songkhla3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Phra Mahathat Chedi Traiphop Traimongkon</h1>
            <div align="center">
                <img src= "https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03008374_1.jpeg" id="touristInfo" ></img>
                <img src= "https://www.vlhatyaihotel.com/uploadfile/20170815135907.png" id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Hat Yai, Songkhla Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : -</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Songkhla3;
