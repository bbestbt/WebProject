import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class UthaiThani2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Sangkat Rattana Khiri </h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012822_1.jpeg"  id="touristInfo" ></img>
                <img src="https://ak.picdn.net/shutterstock/videos/23084335/thumb/1.jpg"  id="touristInfo" ></img>
              
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 125 Moo 3 Mueang Uthai Thani, Uthai Thani</li>
                <li>Tel : +66 5651 1598</li>
                <li>Opening time : 06:00 - 18:00 </li>
                <li>Fee : -</li>
               
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default UthaiThani2;

