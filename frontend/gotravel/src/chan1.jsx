import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class chan1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Wat Thong Thua</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013940_1.jpeg"  id="touristInfo" ></img>
                <img src="https://temple-thai.com/wp-content/uploads/2018/02/wat-thong-thua-13.jpg"  id="touristInfo" ></img>
                <img src="https://temple-thai.com/wp-content/uploads/2018/02/wat-thong-thua-17.jpg"  id="touristInfo" ></img>
                <img src="https://temple-thai.com/wp-content/uploads/2018/02/wat-thong-thua-15.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Chanthaburi, Chanthaburi</li>
                <li>Tel : +66 3932 5763</li>
                <li>Opening time : Everyday 06.00-18.00 </li>
                <li>Fee : - Baht </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default chan1;

