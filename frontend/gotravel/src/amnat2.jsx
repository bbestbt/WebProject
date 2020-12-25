import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class amnat2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Don Chao Pu Botanical Park</h1>
            <div align="center">
                <img src="https://www.lovethailand.org/images/banner/content/lovethailand_banner_20132801131919.jpg"  id="touristInfo" ></img>
                <img src="https://i2.wp.com/northeastthailand.com/wp-content/uploads/2019/08/S-2530.jpg?w=1080&ssl=1"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/a4/ec/e2/fb-img-1458442259601.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/image/CustomPOI/Picture/P03008017_1.jpeg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Phana, Phana, Amnagcharoen 37180 Thailand</li>
                <li>Tel : +664232 5406/7</li>
                <li>Opening time : Open Wed - Sun 8:00-16:00 </li>
                <li>Fee : - </li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default amnat2;

