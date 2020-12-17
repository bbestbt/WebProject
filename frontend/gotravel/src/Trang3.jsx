import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Trang3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Ko Lao Liang Nong</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000031_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.thai2siam.com/sites/default/files/styles/slideshow-small/public/business_gallery/koh-lao-liang-8.jpg?itok=7n06cJn_"  id="touristInfo" ></img>
                <img src="https://www.thai2siam.com/sites/default/files/styles/slideshow-small/public/business_gallery/koh-lao-liang-2.jpg?itok=gFtlU9oj"  id="touristInfo" ></img>
                <img src="https://i.ytimg.com/vi/EMc82_dRX6Y/maxresdefault.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Palian, Trang Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : -</li>
                <li>Fee : - </li>
                <li>Category : Island</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Trang3;

