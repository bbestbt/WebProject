import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class sakaeo1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Lalu</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013988_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013988_2.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013988_3.jpeg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/type/thumbnail/size/1000/file/2018032968d4bf08ccd98a06ba320050d1887c43115854.jpg"  id="touristInfo" ></img>
               
               
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ta Phraya, Sa Kaeo</li>
                <li>Tel : +66 3724 3724,+66 3724 9708</li>
                <li>Opening time : Everyday 8.00-18.00</li>
                <li>Fee : - Baht </li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default sakaeo1;

