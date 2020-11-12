import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class trat3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Ko Kradat</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007022_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007022_2.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007022_3.jpeg"  id="touristInfo" ></img>
                <img src="https://iamkohchang.com/wp-content/gallery/kradat/kohkradat-01.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ko Kut, Trat </li>
                <li>Tel : +66 2368 2634,+66 2368 2675</li>
                <li>Opening time : Everyday 6.00-18.00 </li>
                <li>Fee : 100 Baht </li>
                <li>Category : Beaches </li>
            </ul>
            
        </div>
        </div>

        
        );
    }
}
 
export default trat3;

