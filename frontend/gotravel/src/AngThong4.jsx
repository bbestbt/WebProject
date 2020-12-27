import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class AngThong4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Sang Kratai</h1>
            <div align="center">
                <img src="https://www.paiduaykan.com/province/central/angthong/pic/watsangkratai1.jpg"  id="touristInfo" ></img>
                <img src="https://www.osmuppercentral.go.th/tmp/58cd825a60bf7244c76f76c281dc2b2b.jpg"  id="touristInfo" ></img>
                <img src="https://www.tour-bangkok-legacies.com/images/wat-sang-kratai-ang-thong-thailand-21887271.jpg"  id="touristInfo" ></img>
                <img src="https://st4.depositphotos.com/2805411/27895/i/600/depositphotos_278958206-stock-photo-buddha-in-ancient-temple-at.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 4 Mueang Ang Thong, Ang Thong Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 8:00 - 17:00</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default AngThong4;

