import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class khon4 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Pa Thamma Utthayan</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/09/fb/2f/caption.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/09/98/c1/da/caption.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/08/43/36/f5/wat-pa-thamma-utthayan.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/38/a9/6f/buddha.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Samran, Khon Kaen, Thailand 40000</li>
                <li>Tel : -</li>
                <li>Opening time : 8:00 - 18:00</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default khon4;

