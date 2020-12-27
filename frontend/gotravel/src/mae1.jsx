import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class mae1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Wat Phra That Doi Kong Mu</h1>
            <div align="center">
                <img src="https://blog.airpaz.com/wp-content/uploads/Wat-Phra-That-Doi-Kong-Mu-Wat-Phra-That-Doi-Kong-Mu.png"  id="touristInfo" ></img>
                <img src="https://www.discoverythailand.com/Images/Place/ID_882_Large.jpg"  id="touristInfo" ></img>
                <img src="https://www.thaizer.com/wp-content/uploads/2014/11/MaeHongSon-64.jpg"  id="touristInfo" ></img>
                <img src="https://www.renown-travel.com/images/wat-phra-that-doi-kong-mu-l.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Chongkum Mae Hong oOn 58000</li>
                <li>Tel : +66 53 611 221 </li>
                <li>Opening time : daylight hours</li>
                <li><span>Fee : -</span></li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default mae1;
