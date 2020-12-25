import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class maha2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Charoen Phon Temple </h1>
            <div align="center">
                <img src="https://temple-thai.com/wp-content/uploads/2017/06/wat-charoen-phon-7.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/c0/1c/67/caption.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/c0/1c/fc/caption.jpg"  id="touristInfo" ></img>
                <img src="https://temple-thai.com/wp-content/uploads/2018/01/wat-phon-chai-chiang-khan-12.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Tha Khonyang Subdistrict, Kantharawichai Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 8:00 - 18:00 </li>
                <li>Fee : -</li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default maha2;

