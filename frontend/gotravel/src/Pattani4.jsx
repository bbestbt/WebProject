import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Pattani4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Laem Ta Chi (Laem Pho)</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-c/768x250/0f/e5/44/56/img-25600713-130444-largejpg.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/e5/44/59/img-25600713-134811-largejpg.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 1 Yaring, Pattani Thailand</li>
                <li>Tel : +66 7335 3441</li>
                <li>Opening time : 8:00 - 18:00</li>
                <li>Fee : -</li>
                <li>Category : Beach</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Pattani4;

