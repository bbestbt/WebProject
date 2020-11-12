import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class khon3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Thung Setthi</h1>
            <div align="center">
                <img src="https://thailandforfarang.com/assets/wat-Thung-Setthi.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/19/5d/04/wat-thung-setthi-temple.jpg"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/thoungkung/thoungkung1803/thoungkung180300721/97874145-wat-thung-setthi-thung-setthi-temple-khon-kaen-thailand.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/daodao/photo-s/09/68/9b/61/wat-thung-setthi-temple.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Khon Kaen Ban Nong Hai</li>
                <li>Tel : +66 93 469 2114 </li>
                <li>Opening time : 8:00 - 18:00</li>
                <li>Fee : - </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default khon3;

