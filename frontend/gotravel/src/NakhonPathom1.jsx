import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class NakhonPathom1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Lum Phaya Floating Market</h1>
            <div align="center">
                <img src="https://www.mythailandphotos.com/wp-content/uploads/2017/04/IMG_0115.jpg"  id="touristInfo" ></img>
                <img src="https://www.mythailandphotos.com/wp-content/uploads/2017/04/IMG_0122.jpg"  id="touristInfo" ></img>
                <img src="https://www.tour-bangkok-legacies.com/images/wat-lam-phaya-floating-market-birds.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012943_1.jpeg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Lam Phaya Bang Len Nakhon Pathom Thailand</li>
                <li>Tel : +66 3496 7084</li>
                <li>Opening time : 8:00 - 17:00 </li>
                <li>Fee : -</li>
                <li>Category : Market </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default NakhonPathom1;

