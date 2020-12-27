import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SamutSongkhram4 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Bang Khae Noi</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005429_1.jpeg"  id="touristInfo" ></img>
                <img src="https://ak.jogurucdn.com/media/image/p25/place-2018-05-13-14-b05201645106e5aec2e26b9dabb198d8.jpg"  id="touristInfo" ></img>
              
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address :Amphawa, Samut Songkhram</li>
                <li>Tel :  0 3476 1222</li>
                <li>Opening time : All time</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default SamutSongkhram4;

