import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class mukda3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Srimongkol Nua</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/10/a5/0f/caption.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/10/a6/62/caption.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/p/AF1QipPEgi8-92FvBxiYxzy2m78htlDm8zT-hXzyt3N5"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/17/66/5b/6e/photo0jpg.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 646 Samran Chai Kong Nae, Amphoe Mueang Mukdahan, Chang Wat Mukdahan 49000, Thailand</li>
                <li>Tel : +66 42 632 862. </li>
                <li>Opening time : 6:00 - 18:00</li>
                <li>Fee : - </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default mukda3;

