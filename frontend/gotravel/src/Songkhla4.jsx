import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Songkhla4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Ton Nga Chang Waterfall</h1>
            <div align="center">
                <img src= "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/f6/63/9e/namtok-ton-nga-chang.jpg"  id="touristInfo" ></img>
                <img src= "https://d2d3n9ufwugv3m.cloudfront.net/w1168-h656-cfill/trips/v7x1A-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B9%82%E0%B8%95%E0%B8%99%E0%B8%87%E0%B8%B2%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%87%E0%B8%82%E0%B8%A5%E0%B8%B2.jpg" id="touristInfo" ></img>
                <img src= "https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03001646_1.jpeg"id="touristInfo" ></img>
                <img src= "https://d2d3n9ufwugv3m.cloudfront.net/w1200-h900-cfill/topics/jvRnr-Ton%20Nga%20Chang%20Waterfall.jpg" id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Hat Yai, Songkhla Thailand</li>
                <li>Tel : +66 7423 1055</li>
                <li>Opening time : 8:00 - 17:00</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Songkhla4;
