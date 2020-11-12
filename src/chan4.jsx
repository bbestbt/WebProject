import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class chan4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Namtok Phlio National Park</h1>
            <div align="center">
                <img src="https://www.khaosok.com/wp-content/uploads/2018/11/Namtok-Phlio-National-Park.jpg"  id="touristInfo" ></img>
                <img src="https://www.touronthai.com/gallery/photo/40003004/t2phlio20.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 41 Moo 12 Laem Sing, Chanthaburi</li>
                <li>Tel : +66 3943 4528</li>
                <li>Opening time : Everyday 06.00-18.00 </li>
                <li>Fee : Foreigner adult 200 Baht and child 100 Baht </li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default chan4;

