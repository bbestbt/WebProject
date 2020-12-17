import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Narathiwat2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Pajo Waterfall</h1>
            <div align="center">
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/201711095d98ec0427152056397e9e35f357be87144501.JPG"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03001572_1.jpeg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Bacho, Narathiwat Thailand</li>
                <li>Tel : +66 7359 9043</li>
                <li>Opening time : 8:00 - 17:00 </li>
                <li>Fee : -</li>
               
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Narathiwat2;

