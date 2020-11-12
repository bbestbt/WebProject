import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class prachin1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Chao Phya Abhaibhubejhr Building</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03006413_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03006413_2.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03006413_3.jpeg"  id="touristInfo" ></img>
                <img src="https://f.tpkcdn.com/review-source/ed6ea64e-b5e9-d5f6-ce5a-52bbf49b7a20.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 32/7 Moo 12, Prachin Anuson Road Mueang Prachin Buri, Prachin Buri</li>
                <li>Tel : +66 3721 1088</li>
                <li>Opening time : Everyday 08:30-20:30</li>
                <li>Fee : - Baht </li>
                <li>Category : Art, Culture </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default prachin1;

