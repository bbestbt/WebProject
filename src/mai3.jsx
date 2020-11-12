import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class mai3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Wat Phra That Doi Suthep</h1>
            <div align="center">
                <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Phra_That_Doi_Suthep_01.jpg/1200px-Phra_That_Doi_Suthep_01.jpg" id="touristInfo" ></img>
                <img src= "https://lillagreen.at/wp-content/uploads/2018/11/Wat-Phra-That-Doi-Suthep-17.jpg" id="touristInfo" ></img>
                <img src= "https://d25ly0b28rumx9.cloudfront.net/wp-content/uploads/2017/03/Doi-Suthep-Temple.jpg" id="touristInfo" ></img>
                <img src= "https://ak.picdn.net/shutterstock/videos/4848155/thumb/1.jpg" id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Huai Kaeo Road Mueang Chiang Mai, Chiang Mai</li>
                <li>Tel : +66 5329 5012 </li>
                <li>Opening time : 6:00 - 20:00</li>
                <li>Fee : Foreigner - 30 Baht</li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default mai3;
