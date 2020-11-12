import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class et1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Nuea</h1>
            <div align="center">
                <img src="https://thailandtourismdirectory.go.th/th/file/get/file/20171128be53a0541a6d36f6ecb879fa2c584b08221458.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/th/file/get/file/201711286625c9c6fb6f82e467b9a60b446d8d31220359.jpg"  id="touristInfo" ></img>
                <img src="https://www.touronthai.com/gallery/photo/3812/20132-01.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/th/file/get/file/201711282abeb59ed2f985c4ffc322b006ae3a13221457.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 372 Noengpadit Alley,Tambon Nuea Mueang,Amphoe Mueang Roi Et,Chang Wat Roi Et 45000,Thailand</li>
                <li>Tel : +66 56 481 660</li>
                <li>Opening time : 8:00 - 17:00</li>
                <li>Fee : -</li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default et1;

