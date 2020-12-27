import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class mai1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Doi Inthanon</h1>
            <div align="center">
                <img src="https://d3h30waly5w5yx.cloudfront.net/images/tour/pictures/doi-inthanon-national-park-1-day-tour-tripguru-1.jpg"  id="touristInfo" ></img>
                <img src= "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/jknn3gcwwxhqa29ucynu/DoiInthanonNationalParkDayTour.webp"  id="touristInfo" ></img>
                <img src= "https://ak.picdn.net/shutterstock/videos/10784540/thumb/1.jpg"  id="touristInfo" ></img>
                <img src= "https://www.tripsavvy.com/thmb/iiRV3m4SpeXBPw5ppFR-KxPUZl4=/5000x2812/smart/filters:no_upscale()/doi-inthanon-national-park-5be9e9ebc9e77c00512158b9.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 119 Moo 7 Ban Luang Subdistrict, Doi Inthanon National Park 50270 Thailand</li>
                <li>Tel : +66 5328 6728 </li>
                <li>Opening time : 5:30 am to 6:30 pm</li>
                <li><span>Fee : Foreigners - 300 Baht (children - 150 Baht)</span></li>
                <li><span>Local - 50 Baht (children - 20 Baht)</span></li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default mai1;
