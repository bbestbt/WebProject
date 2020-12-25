import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Saraburi3 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Phra Phuttachai</h1>
            <div align="center">
                <img src= "https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002681_1.jpeg"  id="touristInfo" ></img>
                <img src= "https://previews.123rf.com/images/thanespong/thanespong1707/thanespong170700064/82942220-wat-phra-phutthachai-in-saraburi-thailand.jpg"  id="touristInfo" ></img>
            
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Phahon Yothin Road Mueang Saraburi, Saraburi</li>
                <li>Tel : +66 3630 3169 </li>
                <li>Opening time : 7AM to 5PM</li>
                <li>Fee : - </li>
                <li>Category : emple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Saraburi3;
