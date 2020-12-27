import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class prachuap4 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Ko Thalu, Ko Sang, Ko Sing</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013798_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013798_2.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013798_3.jpeg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171108c52f1bd66cc19d05628bd8bf27af3ad6151657.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address :Bang Saphan Noi, Prachuap Khiri Khan </li>
                <li>Tel : +66 3244 2636</li>
                <li>Opening time : Everyday 7.00-17.00 </li>
                <li>Fee : - Baht</li>
                <li>Category : Nature </li>
            </ul>


        </div>
        </div>

        

       
        
        );
    }
}
 
export default prachuap4;



