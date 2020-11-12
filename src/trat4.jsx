import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class trat4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Ko Mak</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007162_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007162_2.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007162_3.jpeg"  id="touristInfo" ></img>
                <img src="https://miro.medium.com/max/1024/1*BmgwERnsbnM3RZOAe9oCNQ.jpeg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ko Kut, Trat </li>
                <li>Tel : +66 3959 7259</li>
                <li>Opening time : Everyday  </li>
                <li>Fee : - Baht </li>
                <li>Category : Beaches </li>
            </ul>
            
        </div>
        </div>

        
        );
    }
}
 
export default trat4;

