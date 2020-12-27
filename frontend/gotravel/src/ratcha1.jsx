import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class ratcha1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Phimai Historical Park</h1>
            <div align="center">
                <img src="https://d2d3n9ufwugv3m.cloudfront.net/w1200-h900-cfill/topics/nVawp-Phimai%20Historical%20Park.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/09/cf/bc/de/prasat-hin-phimai-phimai.jpg"  id="touristInfo" ></img>
                <img src="https://www.museumthailand.com/upload/slide/1495770233_7660.jpg"  id="touristInfo" ></img>
                <img src="https://trainsplanesandtuktuks.com/Wordpress/wp-content/uploads/2012/05/546592_10150809874025807_810871410_n-edited-1024x768.jpg"  id="touristInfo" ></img>             
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ananthachinda Rd, Nakhon Ratchasima 30110 Thailand</li>
                <li>Tel : +66 44 471 535</li>
                <li>Opening time : 7:00 - 18:00</li>
                <li>Fee : Foreigner - 100 Baht, Local 20 Baht</li>
                <li>Category : Landmark </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default ratcha1;

