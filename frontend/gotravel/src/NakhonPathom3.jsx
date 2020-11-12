import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class NakhonPathom3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Western Thai Culture Institute</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P01003006_1.jpeg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/2c/b6/8c/de-java-hotel.jpg"  id="touristInfo" ></img>
                <img src="https://www.museumthailand.com/upload/cover/thumb_1515992537_5683.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/nbaeTFSoGDiFeyXuD-jxh2OwygWYFyt93Yt0_4ZX9f61pF3_Edya4O8arGK138xj0xx_V5YWeMoAbWEl2wCgos75a6Lma5sYblysbBIyLXEDvgul5A5120nGiqg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Nakhon Pathom, Nakhon Pathom Thailand</li>
                <li>Tel : +66 3425 3840 </li>
                <li>Opening time : 9:00 - 17:00</li>
                <li>Fee : Foreigner - 100 Baht</li>
                <li>Category : Museums </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default NakhonPathom3;

