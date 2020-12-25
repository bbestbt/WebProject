import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class yaso4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Phu Tham Phra
</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-c/768x250/0b/1d/c9/90/cave-buddhas.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/suLyr2vlf7_PxbpTY8JjOe2brLrq-HGn25Y8jrwGOUfYgfg2R4SF6OECVsKkR0vgYFrIWotWeHR2eamyncGv5eAJN80N"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004157_1.jpeg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/lj2zkL-yX9y14XqyoMJnm2SKYvmMvHjQKEQRaHvnZpvoHpf5jZqopnIRw5xUl0_VCXH7GU-rrXhcmY0xUjdEZptyhewl"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Kham Nam Sang, Kut Chum, Yasothon 35140 Thailand</li>
                <li>Tel : +664524 3770</li>
                <li>Opening time : 8:00 - 18:00</li>
                <li>Fee : -</li>
                
                <li>Category : Temple, Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default yaso4;

