import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Phatthalung3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Namtok Phraiwan</h1>
            <div align="center">
                <img src="https://www.lovethailand.org/thumb.php?src=images/banner/content/lovethailand_banner_20132204104854.jpg&x=300&y=300"  id="touristInfo" ></img>
                <img src="https://static.smarttravelapp.com/data/pois/3148_praiwanjpg6_1489826832.jpg"  id="touristInfo" ></img>
                <img src="https://static.smarttravelapp.com/data/pois/3148_praiwanjpg3_1489826623.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013422_1.jpeg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 8 Highway 4122 (Khlong Muai-Pa Bon) Kong Ra, Phatthalung Thailand</li>
                <li>Tel : +66 7423 1055</li>
                <li>Opening time : 8:00 - 16:30</li>
                <li>Fee : - </li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Phatthalung3;

