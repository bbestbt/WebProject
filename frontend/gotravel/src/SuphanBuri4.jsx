import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class phun4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Hariphunchai National Museum</h1>
            <div align="center">
                <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2018/08/haripunchai-national-museum07.jpg"  id="touristInfo" ></img>
                <img src="https://mychiangmaitour.com/wp-content/uploads/2018/08/hariphunchai-national-museum05.jpg"  id="touristInfo" ></img>
                <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2018/08/haripunchai-national-museum06.jpg"  id="touristInfo" ></img>
                <img src="https://www.museumthailand.com/upload/slide/1489725586_6098.JPG"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Nai Mueang Sub-district, Mueang District (Opposite Wat Phra That Hariphunchai) ,Lamphun Province</li>
                <li>Tel : +66 53 511 186 </li>
                <li>Opening time : 9.00 a.m - 4.00 pm Closed on Mondays, Tuesdays and public holidays.</li>
                <li>Fee : Foreigner 100 Baht, Local 50 Baht</li>
                <li>Category : Museum</li>
            </ul> 
        </div>
        </div>       
        );
    }
}
 
export default phun4;
