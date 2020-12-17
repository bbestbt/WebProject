import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class PathumThani3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Rangsit Floating Market</h1>
            <div align="center">
                <img src="https://www.thailandtourismdirectory.go.th/en/file/get/file/20171215c4ca4238a0b923820dcc509a6f75849b154832.jpg"  id="touristInfo" ></img>
                <img src="https://www.thaitravelblogs.com/wp-content/uploads/2012/06/IMG_5523.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Rangsit Thanyaburi Pathum Thani 12110 Thailand</li>
                <li>Tel : +66 2567 6000-6 </li>
                <li>Opening time : 10:00 - 17:00</li>
                <li>Fee : - </li>
                <li>Category : Market </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default PathumThani3;

