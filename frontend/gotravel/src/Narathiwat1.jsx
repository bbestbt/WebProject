import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Narathiwat1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Khao Kong Buddhist Park</h1>
            <div align="center">
                <img src="https://static.smarttravelapp.com/data/pois/3307_kaokongjpg1_1490258495.png"  id="touristInfo" ></img>
                <img src="https://image.shutterstock.com/z/stock-photo-narathiwat-thailand-february-phra-phuttha-thaksin-ming-mongkol-buddha-image-seated-1339503299.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 3 Narathiwat-Ra Ngae Road Mueang Narathiwat, Narathiwat Thailand</li>
                <li>Tel : +66 7354 2683</li>
                <li>Opening time : 6:00 - 18:00</li>
                <li>Fee : -</li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Narathiwat1;

