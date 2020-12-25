import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Chumphon1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Suan Nai Dum</h1>
            <div align="center">
                <img src="https://thailandtourismdirectory.go.th/th/file/get/file/2018080967deedc0d028df59d364f0570fef24f4134304.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0b/3d/32/cf/1463099521585-largejpg.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/IMAGE/CustomPOI/Picture/P03009131_1.jpeg"  id="touristInfo" ></img>
                <img src="https://patricklepetit.jalbum.net/CHUMPHON/PHOTOS/THUNG%20TAKO/Suan%20Nai%20Dum/Q0523138_resize.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Amphoe Thung Tako, Thung Tako Thailand</li>
                <li>Tel : +66 8 9652 0734</li>
                <li>Opening time : 9:00 - 18:00 </li>
                <li>Fee : -</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Chumphon1;

