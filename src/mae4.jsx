import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class mae4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Pai Canyon</h1>
            <div align="center">
                <img src="https://mychiangmaitour.com/wp-content/uploads/2016/11/pai_canyon01.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/e1/e2/27/pai-canyon.jpg"  id="touristInfo" ></img>
                <img src="https://asianitinerary.com/wp-content/uploads/2013/07/4.jpg"  id="touristInfo" ></img>
                <img src="https://thaizer.smugmug.com/Thailand/Pai/i-skmHXxM/0/L/Thailand-33-L.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mae Hi Pai Mae Hong Son 58130</li>
                <li>Tel : +66 86 113 7373 </li>
                <li>Opening time : All time</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default mae4;
