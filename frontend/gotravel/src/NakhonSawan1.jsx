import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class NakhonSawan1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Kao Nor Bat View Point</h1>
            <div align="center">
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/2017122030f9bcbe857b4d263d907bb58e56cc0d145943.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171220f8f3898eccaf47643869069b0c01488f150027.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/201712201121844401b5f49595af03fda20a5d28150010.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171220e9e48a765087a1d021260403fa08d3af150029.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ban Daen Banphot Phisai Nakhon Sawan 60180 Thailand</li>
                <li>Tel : +66 5627 9320</li>
                <li>Opening time : 8:00 - 18:30</li>
                <li>Fee : -</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default NakhonSawan1;

