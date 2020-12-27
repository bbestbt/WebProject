import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Phatthalung4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Phu Pha Petch Cave</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013061_1.jpeg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/201711032dda7fefa7c39c9ec4b413a521803c76090618.JPG"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 225 Moo 1 Pa Bon, Phatthalung Thailand</li>
                <li>Tel : +66 7477 4505</li>
                <li>Opening time : 8:30 - 15:30</li>
                <li>Fee : Adult 100 Baht, Children 50 Baht</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Phatthalung4;

