import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Chumphon2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Mu Ko Chumphon National Park</h1>
            <div align="center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Mu_Ko_Chumphon_National_Park_Chumphon_Thailand.jpg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Mu_Ko_Chumphon_National_Park_03.jpg/1024px-Mu_Ko_Chumphon_National_Park_03.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007460_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.asiatravelgate.com/wp-content/uploads/2017/09/Mu-Koh-Chumphon-National-Park-Thailand-001.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 1/4 Moo 5 Mueang Chumphon, Chumphon Thailand</li>
                <li>Tel : +66 7755 8144</li>
                <li>Opening time : 08.00 - 16.30</li>
                <li>Fee : Adult 200 Baht, Children 100 Baht</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Chumphon2;

