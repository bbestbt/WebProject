import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class rai4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Wat Huai Pla Kung</h1>
            <div align="center">
                <img src="https://mychiangmaitour.com/wp-content/uploads/2018/02/wat_huai_pla_kang07.jpg"  id="touristInfo" ></img>
                <img src= "https://c1.wallpaperflare.com/preview/563/863/642/thailand-wat-huay-pla-kung-chiang-rai-temple.jpg"  id="touristInfo" ></img>
                <img src= "https://youcanwithkids.com/wp-content/uploads/2017/12/D90E1626-918F-46EC-B008-B3982F4E9E4A-e1512139152388-1038x576.jpeg"  id="touristInfo" ></img>
                <img src= "https://mychiangmaitour.com/wp-content/uploads/2018/02/wat_huai_pla_kang08.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address :  553, Amphoe Mueang Chiang Rai, Chang Wat Chiang Rai 57100, Thailand</li>
                <li>Tel : +66(0) 88 4343 199 </li>
                <li>Opening time : 8:00 am to 5:00 pm</li>
                <li><span>Fee : - </span></li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default rai4;
