import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Narathiwat4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Khun Lahan Local Museum</h1>
            <div align="center">
                <img src="https://www.touronthai.com/gallery/photo/67000027/khunlaharn-museum01.jpg"  id="touristInfo" ></img>
                <img src="https://static.bangkokpost.com/media/content/dcx/2014/09/04/675488.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Yi-ngo, Narathiwat Thailand</li>
                <li>Tel : +66 7359 1222</li>
                <li>Opening time : 9:00 - 16:00</li>
                <li>Fee : -</li>
                <li>Category : Museums</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Narathiwat4;

