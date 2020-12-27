import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class pang2 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Wat Phra That Lampang Luang</h1>
            <div align="center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Lampangluang1.JPG"  id="touristInfo" ></img>
                <img src="https://ak.picdn.net/shutterstock/videos/10562768/thumb/1.jpg"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/thoungkung/thoungkung1806/thoungkung180601866/104133799-wat-phra-that-lampang-luang-lampang-thailand.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/63/33/40/caption.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 271 Lampang Luang Ko Kha Lampang 52130</li>
                <li>Tel : +66 88 4343 199</li>
                <li>Opening time : 7:30 - 17:00</li>
                <li>Fee : - </li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>
        );
    }
}
 
export default pang2;
