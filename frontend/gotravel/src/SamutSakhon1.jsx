import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SamutSakhon1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Phra Klang Nam</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03015264_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.chillpainai.com/src/wewakeup/img_travel/456/2.JPG"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Samut Sakhon, Samut Sakhon</li>
                <li>Tel : +66 3475 2847 </li>
                <li>Opening time :  07:00 - 18:00</li>
                <li><span>Fee : - Baht </span></li>
                <li>Category : Landmarks </li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default SamutSakhon1;
