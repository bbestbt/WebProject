import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Phitsanulok1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Town Wall And Moat</h1>
            <div align="center">
                <img src="https://patricklepetit.jalbum.net/PHITSANULOK/PHOTOS/MUEANG%20PHITSANULOK/Town%20Wall%20and%20Moat/L1229328_resize.jpg"  id="touristInfo" ></img>
                <img src= "https://lh3.googleusercontent.com/proxy/GcvfLeJ5SLJL6SX57rz2jlE5qG05P3QaOMxkFpoTfejRERv89hqp786irkKo9OhMJzNY2mG4MnRfX5XLRpFSQDoc26CZVRjdZXQu9Ja3qTwOlKDPKu7TE50OxpDW-E16gAQ7LnHzNbLWliJwktggLI0LiLWBWZEw-ixHpIpTqCkcS3FuTno"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Singhawat Road Mueang Phitsanulok, Phitsanulok Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 6:30 - 18:00 pm</li>
                <li>Fee : -</li>
                <li>Category : Museums</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Phitsanulok1;
