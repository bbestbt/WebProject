import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Bangkok4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Jim Thompson House</h1>
            <div align="center">
                <img src="https://rabbitweekend.com/wp-content/uploads/2020/06/cover-jim-thompson-1140x570.jpg"  id="touristInfo" ></img>
                <img src="https://ed.edtfiles-media.com/static-cache/resize-cache/790x528/ud/images/1/44/131640/JTH_2_Cover.jpg"  id="touristInfo" ></img>
                <img src="https://memeew08.files.wordpress.com/2016/04/thompson5-tile.jpg?w=640" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/CeS6umV2ZrETIhHO-UvcTUmN-_Y-D_yCiSefmqod1gfGKLBlsfgO-6V_Bl6eGXvs55CzJI8Qr4eYLQ6Uq53jWr7k1zXA5xbHnsjm2a8tsD-NneOH2UXx0iusOSNonLaSlj_tICETVCc355_Oe8RAbI0exIuZbJ_lJg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Soi Kasemsan 2, Rama 1 Rd., Pathumwan (BTS National Stadium)</li>
                <li>Tel : +66 2 700 2568</li>
                <li>Opening time : Everyday 9:00-18:00 </li>
                <li>Fee : Adult 200 Baht, Children less than 10 - Free </li>
                <li>Category : Museums</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Bangkok4;

