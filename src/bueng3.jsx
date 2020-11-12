import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class bueng3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Sawang Arom</h1>
            <div align="center">
                <img src="https://www.ayutthaya-history.com/images/Wat_SawangArom3.jpg"  id="touristInfo" ></img>
                <img src="https://gerryganttphotography.com/images/phuket/DTHP0374WatSawangArom.jpg"  id="touristInfo" ></img>
                <img src="https://timesamui.com/upload/places/08/70/wat-sawang-arom-chaweng.jpg?1544105657"  id="touristInfo" ></img>
                <img src="https://gerryganttphotography.com/images/phuket/DTHP0373WatSawangArom.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Baan Non Sila, Moo 1 Non Sila Subdistrict, Pak Khat 38190 Thailand</li>
                <li>Tel : 4387 3480 </li>
                <li>Opening time : 8:30 - 17:00 </li>
                <li>Fee : - </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default bueng3;

