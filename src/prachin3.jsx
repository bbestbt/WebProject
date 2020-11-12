import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class prachin3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Si Mahosot Ancient Town</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005428_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005428_2.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005428_3.jpeg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/type/thumbnail/size/1000/file/20171204c4ca4238a0b923820dcc509a6f75849b110707.jpg"  id="touristInfo" ></img>
               
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Si Mahosot, Prachin Buri</li>
                <li>Tel : 0 3731 2282, 0 3731 2284</li>
                <li>Opening time : Everyday 08:30-16:30</li>
                <li>Fee : - Baht </li>
                <li>Category : Art, Culture </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default prachin3;

