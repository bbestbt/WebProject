import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class yaso1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Phra Buddhabat Temple</h1>
            <div align="center">
                <img src="https://i.pinimg.com/originals/5f/6a/0a/5f6a0a4d6b37175d1056804c21f1abae.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/c5/40/42/caption.jpg"  id="touristInfo" ></img>
                <img src="https://static.thousandwonders.net/Wat.Phra.Phutthabat.original.32248.jpg"  id="touristInfo" ></img>
                <img src="https://www.renown-travel.com/images/wat-phra-phutthabat-l.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 8 Phra Phutthabat, Saraburi</li>
                <li>Tel : +66 3662 6658</li>
                <li>Opening time : 7:30 - 17:00</li>
                <li>Fee : 30 Baht</li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default yaso1;

