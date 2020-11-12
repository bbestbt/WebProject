import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class mai4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Wat Chedi Luang</h1>
            <div align="center">
                <img src= "https://blog.airpaz.com/wp-content/uploads/Wat-Chedi-Luang.jpg"  id="touristInfo" ></img>
                <img src= "https://media-cdn.tripadvisor.com/media/photo-s/12/f3/be/75/restored-ruin-of-the.jpg" id="touristInfo" ></img>
                <img src= "https://lp-cms-production.imgix.net/2019-06/9bae2e1cc5bacbaae4a043aa5a591663-wat-chedi-luang.jpg"id="touristInfo" ></img>
                <img src= "https://blog.airpaz.com/wp-content/uploads/Wat-Chedi-Luang1.jpg" id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 103 Prapokkloa Rd, Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200, Thailand</li>
                <li>Tel : +66 (0) 53 24 8604 </li>
                <li>Opening time : 6am - 6pm</li>
                <li>Fee : Adult 40 Baht, Children 20 Baht</li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default mai4;
