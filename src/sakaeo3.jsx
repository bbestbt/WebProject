import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class sakaeo3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Wat Nakorntum</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013990_1.jpeg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/th/file/get/type/thumbnail/size/1000/file/201711095d7b9adcbe1c629ec722529dd12e5129105431.jpg" id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/th/file/get/type/thumbnail/size/1000/file/20171109d41d8cd98f00b204e9800998ecf8427e105429.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/th/file/get/type/thumbnail/size/1000/file/2017112545726bf24cd35fcab986545343c043b7075306.jpg"  id="touristInfo" ></img>
               
               
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Watthana Nakhon, Sa Kaeo</li>
                <li>Tel : +66 3726 1190,+66 3726 1191</li>
                <li>Opening time : Everyday 6.00-19.00</li>
                <li>Fee : - Baht </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default sakaeo3;

