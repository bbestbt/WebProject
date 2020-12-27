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
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Jim Thompson House</h1>
            <div align="center">
                <img src="https://rabbitweekend.com/wp-content/uploads/2020/06/cover-jim-thompson-1140x570.jpg"  id="touristInfo" ></img>
                <img src="https://ed.edtfiles-media.com/static-cache/resize-cache/790x528/ud/images/1/44/131640/JTH_2_Cover.jpg"  id="touristInfo" ></img>
                <img src="https://memeew08.files.wordpress.com/2016/04/thompson5-tile.jpg?w=640" id="touristInfo" ></img>
                <img src="https://i.ytimg.com/vi/UwiW69j_SpA/maxresdefault.jpg"  id="touristInfo" ></img>
                
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

