import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class udon4 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Chao Pu-Ya Shrine
</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/e0/61/ba/chao-pu-ya-shrine-at.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/9f/3b/98/chao-pu-ya-shrine-udon.jpg"  id="touristInfo" ></img>
                <img src="https://thailandlife.info/wp-content/uploads/2019/02/Chao-Pu-Ya-Shrine-in-Udon-Thani.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/02/59/cd/chao-pu-ya-shrine.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Nittayo Road Mak Khaeng, Udon Thani 41000 Thailand</li>
                <li>Tel : +66 42 245 801</li>
                <li>Opening time : 8:00 - 20:00</li>
                <li>Fee : -</li>
                <li>Category : Landmark</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default udon4;

