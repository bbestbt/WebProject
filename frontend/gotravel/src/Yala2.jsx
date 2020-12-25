import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Yala2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Namtok Buke Pilo (Namtok Tawan Ratsami)</h1>
            <div align="center">
                <img src="https://www.bloggang.com/data/link-conner55/picture/1289136032.jpg"  id="touristInfo" ></img>
                <img src="https://www.bloggang.com/data/link-conner55/picture/1289135307.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Raman, Yala Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 8:00 - 17:00</li>
                <li>Fee : - </li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Yala2;
