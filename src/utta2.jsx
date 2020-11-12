import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class utta2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Sirikit Dam</h1>
            <div align="center">
                <img src="https://www.egat.co.th/en/images/Media/PD/sirikit/02_2.jpg"  id="touristInfo" ></img>
                <img src="https://www.egat.co.th/en/images/Media/PD/sirikit/01_8.jpg"  id="touristInfo" ></img>
                <img src="https://www.egat.co.th/en/images/Media/PD/sirikit/02_3.JPG"  id="touristInfo" ></img>
                <img src="https://www.egat.co.th/en/images/Media/PD/sirikit/03_5.JPG"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 40 Moo 10 Tha Pla, Uttaradit</li>
                <li>Tel : +66 5546 1140</li>
                <li>Opening time : 8.00 am - 6.00 pm</li>
                <li>Fee : - </li>
                <li>Category : Landmark</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default utta2;
