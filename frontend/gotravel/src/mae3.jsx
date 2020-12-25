import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class mae3 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Chedi Phra That Mae Yen</h1>
            <div align="center">
                <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2017/01/phra_that_mae_yen003.jpg"  id="touristInfo" ></img>
                <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2017/01/phra_that_mae_yen004.jpg"  id="touristInfo" ></img>
                <img src="https://mychiangmaitour.com/wp-content/images/temple/phra_that_mae_yen_temple004.jpg"  id="touristInfo" ></img>
                <img src="https://mychiangmaitour.com/wp-content/images/temple/phra_that_mae_yen_temple005.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mae Hi Pai Mae Hong Son 58130</li>
                <li>Tel : +66 88 4343 199 </li>
                <li>Opening time : 6:00 - 18:00</li>
                <li>Fee : - </li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>
        );
    }
}
 
export default mae3;
