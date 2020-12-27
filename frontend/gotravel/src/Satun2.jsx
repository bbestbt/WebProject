import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Satun2 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Tarutao National Park</h1>
            <div align="center">
                <img src="https://i.ytimg.com/vi/_x90Q5b87_c/maxresdefault.jpg"  id="touristInfo" ></img>
                <img src="https://i.pinimg.com/originals/b8/d3/7a/b8d37a0f759df7745c242831f60c92a4.jpg"  id="touristInfo" ></img>
                <img src="https://www.welove-kohlipe.com/wp-content/uploads/2015/03/tarutao-national-marine-park-thailand.jpg"  id="touristInfo" ></img>
                <img src="https://www.thainationalparks.com/img/poi/snippets/tarutao-national-marine-park.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Satun, Satun Thailand</li>
                <li>Tel : +66 7478 3597</li>
                <li>Opening time : 8:00 - 18:00 </li>
                <li>Fee : Adult 200 Baht, Children 100 Baht</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Satun2;

