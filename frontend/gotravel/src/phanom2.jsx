import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phanom2 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Maha That Temple </h1>
            <div align="center">
                <img src="https://www.renown-travel.com/images/wat-mahathat-ayutthaya-l.jpg"  id="touristInfo" ></img>
                <img src="https://www.renown-travel.com/images/wat-mahathat-sukhothai-l.jpg"  id="touristInfo" ></img>
                <img src="https://www.bkktours.com/wp-content/uploads/2016/04/WatMahathat_6.jpg"  id="touristInfo" ></img>
                <img src="https://architectureofbuddhism.com/books/wp-content/uploads/2014/08/Wat-Mahathat-1.jpg"  id="touristInfo" ></img>  
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Sunthonwichit Road., Nakhon Phanom Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 8:00 - 17:00 </li>
                <li>Fee : 50 Baht</li>
               
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default phanom2;

