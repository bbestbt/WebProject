import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class rayong3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Khao Laem Ya-Mu Ko Samet National Park</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03008421_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03008421_2.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03008421_3.jpeg"  id="touristInfo" ></img>
                <img src="https://i2.wp.com/www.tatnews.org/wp-content/uploads/2020/04/Khao-Laem-Ya-Nature-Trail-1.jpg?resize=1200%2C801&ssl=1"  id="touristInfo" ></img>
               
               
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 79 Moo 1, Hat Mae Ram Phueng-Phe Road Mueang Rayong, Rayong</li>
                <li>Tel : +66 3865 3034</li>
                <li>Opening time : Everyday 6.00-18.00</li>
                <li>Fee : Foreigner adult 200 Baht and children 70 Baht </li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default rayong3;

