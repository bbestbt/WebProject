import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phet1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Kaeng Krachan Dam</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/image/CustomPOI/Picture/P03006069_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.egat.co.th/en/images/Media/PD/kaengkrachan/kaengkrachan.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/09/c2/3d/98/kaeng-krachan-dam.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/nPuaf4rkJlFcqdndBMfv9p2iBhS83QzLrF-yXYJvYY0LXum_CnlaXXN3EF16Xo91e-ntKyorlncjwPwDFvETx3ThVSpgSzIES-NLIQ"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Kaeng Krachan, Phetchaburi </li>
                <li>Tel : 032 459 293</li>
                <li>Opening time : Everyday 6.00-18.00 </li>
                <li>Fee : - Baht</li>
                <li>Category : Nature </li>
            </ul>


        </div>
        </div>

        

       
        
        );
    }
}
 
export default phet1;



