import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class chachoengsao1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Wat Sothonwararam Worawihan</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005061_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005061_2.jpeg"  id="touristInfo" ></img>
                <img src="https://patricklepetit.jalbum.net/CHACHOENGSAO/PHOTOS/MUEANG%20CHACHOENGSAO/Wat%20Sothon%20Wararam%20Worawihan/I0621115_resize.jpg"  id="touristInfo" ></img>
                <img src="https://thumbs.dreamstime.com/z/temple-sothonwararam-worawihan-chachoengsao-thailand-temple-wat-sothonwararam-worawihan-chachoengsao-thailand-161871961.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Thep Khunakon Road Mueang Chachoengsao, Chachoengsao</li>
                <li>Tel : 038-511048 , 038-511449</li>
                <li>Opening time : Everyday 07:00-17.00  </li>
                <li>Fee : - Baht </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default chachoengsao1;

