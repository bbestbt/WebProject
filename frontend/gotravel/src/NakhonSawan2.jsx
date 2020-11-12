import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class NakhonSawan2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Khao Nor Khao Kaew</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002650_1.jpeg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171228566d60e2f461add087ef018548c321c2145021.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171023b406817fb2b9d299a50549663cc3b794010521.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/tzhUPUygVUUZW9suTs9hADE9mGMuCmgRRqkL7FllFPiqkEL_VYn9Ttnnlj1syzat22e1FYOggmykBth6ag1CYWvy3npWaqwgOvkQLVYonRq8IhVOCvOB4_HLuONslml0qj0ab8Wfo6ID23yhsVV3dXA5AYq5QIh_D2to7OwRJUCn17MMQdnyMPIbJWg42HL_zDiKrz2wykpzWZo2lTmOISj5WingTCw
"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ban Daen Banphot Phisai Nakhon Sawan 60180 Thailand</li>
                <li>Tel : +66 8 6449 1193</li>
                <li>Opening time :  8:00 - 18:00 </li>
                <li>Fee : -</li>
               
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default NakhonSawan2;

