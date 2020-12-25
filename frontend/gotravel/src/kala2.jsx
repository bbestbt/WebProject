import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class kala2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">phu faek forest park</h1>
            <div align="center">
                <img src="https://i2.wp.com/destinationthailandnews.com/wp-content/uploads/2018/03/Phu-Faek-Forest-Park-Kalasin-03-1.jpg?fit=640%2C427&ssl=1"  id="touristInfo" ></img>
                <img src="https://itsbetterinthailand.com/wp-content/uploads/sites/4/2019/03/phu-faek-national-forest-banner-1800x1013.jpg"  id="touristInfo" ></img>
                <img src="https://patricklepetit.jalbum.net/KALASIN/PHOTOS/OTHER%20DISTRICTS/Phu%20Faek%20Forest/thumbs/folder/Dinosaur%20Footprints_L0729466.jpg"  id="touristInfo" ></img>
                <img src="https://2.bp.blogspot.com/-zpUevqKHons/TZ63sM72pcI/AAAAAAAAAAY/r6tjppbfjn8/s280/NP159T1P8.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Phu Lan Chang Sub-district, Amphur Na Khu, Kalasin 46000 Thailand</li>
                <li>Tel : +66 43 869 258</li>
                <li>Opening time : 8:00 - 18:30 </li>
                <li>Fee : -</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default kala2;

