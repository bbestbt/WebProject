import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SamutPrakan2 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Phisuea Samut Fort</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03009296_1.jpeg"  id="touristInfo" ></img>
                <img src="https://paknam.com/wp-content/uploads/2016/04/IMG_7410.jpg"  id="touristInfo" ></img>
        
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 144 Pak Khlong Bang Pla Kot Sub-district Phra Samut Chedi, Samut Prakan</li>
                <li>Tel : +66 2425 8419</li>
                <li>Opening time :08:00 - 19:00</li>
                <li>Fee : - </li>
                <li>Category : Art, Culture, Heritage</li>
            </ul> 
        </div>
        </div>
        );
    }
}
 
export default SamutPrakan2;
