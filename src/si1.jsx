import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class si1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Prasat Hin Wat Sa Khampaeng Yai</h1>
            <div align="center">
                <img src="https://www.thailandfromabove.com/wp-content/uploads/2015/08/DJI_0246.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandee.com/img/villes/si-saket/sa-kampaeng-noi-temple.jpg"  id="touristInfo" ></img>
                <img src="https://mapio.net/images-p/77788262.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandguidebook.com/wp-content/uploads/2012/01/DJI_0216.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Sa Kamphaeng Yai Subdistrict, Uthumphon Phisai 33120 Thailand</li>
                <li>Tel : +66 45 691 519</li>
                <li>Opening time : 8:00 - 17:00</li>
                <li>Fee : -</li>
                <li>Category : Landmark </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default si1;

