import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Trang2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Khao Pina Cave</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/image/CustomPOI/Picture/P03003761_1.jpeg"  id="touristInfo" ></img>
                <img src="https://fastly.4sqi.net/img/general/600x600/89258734_Z-ZWu-uLGdgvQ5AxwHB-GpvjUJ0cK0YM49Ae7MPdLmA.jpg"  id="touristInfo" ></img>
                <img src="https://static.smarttravelapp.com/data/pois/2578_kaopinajpg2_1489134552.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/p/AF1QipONPNzF-HZtlqVEDbXMVVwWOxnO2xi_2phZulw9=s1600-w400"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Huai Yot, Trang Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : -</li>
                <li>Fee : - </li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Trang2;

