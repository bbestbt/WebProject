import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class khon1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Nong Waeng Temple</h1>
            <div align="center">
                <img src="https://www.thailandee.com/img/villes/khon-kaen/wat-nong-wan-khon-kaen-61.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/daodao/photo-s/09/68/9d/9e/wat-nong-wang.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/82/7e/ed/the-nine-tiers-of-wat.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/f0/0a/cc/wat-nong-wang.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Soi Wat Nong Waeng, Khon Kaen 40000 Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 8:00 - 17:00 </li>
                <li>Fee : -</li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default khon1;

