import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Phuket1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Karon Viewpoint</h1>
            <div align="center">
                <img src="https://content.phuket101.net/wp-content/uploads/20190124233651/karon-viewpoint-phuket.jpg"  id="touristInfo" ></img>
                <img src="https://a.cdn-hotels.com/gdcs/production153/d1771/2e6084f5-c182-4f94-b793-7dd79bb78762.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Phuket, Phuket Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : -</li>
                <li>Fee : -</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Phuket1;

