import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class phun1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Wat Phra That Hariphunchai</h1>
            <div align="center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/WAT_PHRATHAT_HARIPHUNCHAI_02.jpg"  id="touristInfo" ></img>
                <img src="https://www.lamphun.go.th/uploads/gallery/attractions/8/IMG_0034.jpg"  id="touristInfo" ></img>
                <img src="https://www.lamphun.go.th/uploads/gallery/attractions/8/IMG_0128.jpg"  id="touristInfo" ></img>
                <img src="https://www.lamphun.go.th/uploads/gallery/attractions/8/IMG_0056.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Inthayongyot road (Highway 106) Lamphun</li>
                <li>Tel : +66 5331 1104 </li>
                <li>Opening time :  06:00 -18:00</li>
                <li><span>Fee : 20 Baht </span></li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>
        );
    }
}
 
export default phun1;
