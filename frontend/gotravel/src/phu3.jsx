import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phu3 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Tham Klong Phen</h1>
            <div align="center">
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171127a43683d33b40f413228d54e3c6ed4a2f141758.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/201711271908fd58898d8970529f47f6aa82b8da151305.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/4b/06/7d/wat-tham-klong-phen.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171127a43683d33b40f413228d54e3c6ed4a2f141758.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Non Than Mueang Nong Bua Lam Phu Nong Bua Lam Phu 39000</li>
                <li>Tel : +66 42-312377</li>
                <li>Opening time : 8:00 - 17:00</li>
                <li>Fee : - </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default phu3;

