import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class rayong2 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Thung Prong Thong</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000019_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000019_2.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000019_3.jpeg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/56/61/dc/thung-prong-thong.jpg"  id="touristInfo" ></img>
               
               
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Klaeng, Rayong</li>
                <li>Tel : +66 3866 1720,+66 3866 4585</li>
                <li>Opening time : Everyday 6.00-18.00</li>
                <li>Fee : - Baht </li>
                <li>Category : Educational Places </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default rayong2;

