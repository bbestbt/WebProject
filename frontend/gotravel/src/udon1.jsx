import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class udon1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Phu Prabhat Historical Park</h1>
            <div align="center">
                <img src="https://www.udonthaniattractions.com/uploads/1/4/1/3/14131432/7115809_orig.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandee.com/img/villes/udon-thani/phu-phra-bat-udon-thani.jpg"  id="touristInfo" ></img>
                <img src="https://www.udonthaniattractions.com/uploads/1/4/1/3/14131432/8937353_orig.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/2017122977468a8e019d69ee29c26d3dd5691b30153737.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Baanphue Phu Phra Bat Buabok Forest Park, Udon Thani 41160 Thailand</li>
                <li>Tel : +66 42-918614-2</li>
                <li>Opening time : 8:30 - 16:30</li>
                <li>Fee : 100 Baht</li>
                <li>Category : Nature,Landmark </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default udon1;

