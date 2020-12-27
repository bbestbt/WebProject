import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Satun4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Thung Nui Hot Spring</h1>
            <div align="center">
                <img src="https://fastly.4sqi.net/img/general/600x600/50775557_-rs9K3Vt2zfvBXKwE0F-WmvP4o96-wVN5Wn76wzHkRA.jpg"  id="touristInfo" ></img>
                <img src="https://i.ytimg.com/vi/yl0AzXmGqOw/maxresdefault.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Thung Wa, Satun Thailand</li>
                <li>Tel : +66 7471 2380</li>
                <li>Opening time : 5:00 - 20:00</li>
                <li>Fee : Adult 100 Baht, Children 60 Baht</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Satun4;

