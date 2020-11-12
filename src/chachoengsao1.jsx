import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class chachoengsao1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Wat Sothonwararam Worawihan</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005061_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005061_2.jpeg"  id="touristInfo" ></img>
                <img src="https://www.travel-chachoengsao.com/wp-content/uploads/2019/11/wat-sothonwararam-worawihan-2.jpg"  id="touristInfo" ></img>
                <img src="https://www.travel-chachoengsao.com/wp-content/uploads/2019/11/D3S_73201-1.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Thep Khunakon Road Mueang Chachoengsao, Chachoengsao</li>
                <li>Tel : 038-511048 , 038-511449</li>
                <li>Opening time : Everyday 07:00-17.00  </li>
                <li>Fee : - Baht </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default chachoengsao1;

