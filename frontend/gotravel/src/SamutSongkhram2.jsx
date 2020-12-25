import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SamutSongkhram2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Amphawa Chaipattana Nurak </h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012964_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.lovethailand.org/images/banner/content/lovethailand_banner_20131001100557.jpg"  id="touristInfo" ></img>
               
              
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 185-191 Amphawa Amphawa Samut Songkhram 75110</li>
                <li>Tel : +66 3475 2245</li>
                <li>Opening time : Sat and Sun 08:30 - 21:00 </li>
                <li>Fee : 50 Baht</li>
                <li>Category : Art, Culture, Heritage </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default SamutSongkhram2;

