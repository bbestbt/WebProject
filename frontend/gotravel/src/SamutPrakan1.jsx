import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class pang1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Wat Lai Hin</h1>
            <div align="center">
                <img src="https://mychiangmaitour.com/wp-content/uploads/2018/09/wat_lai_hin_luang001.jpg"  id="touristInfo" ></img>
                <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2018/10/Wat-Lai-Hin-Luang003.jpg"  id="touristInfo" ></img>
                <img src="https://i0.wp.com/www.mychiangmaitravel.com/wp-content/uploads/2018/10/Wat-Lai-Hin-Luang01.jpg?fit=800%2C533&ssl=1"  id="touristInfo" ></img>
                <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2018/10/Wat-Lai-Hin-Luang002.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 234 Moo 2 Sala Ko Kha Lampang 52130</li>
                <li>Tel : +66 54 274 006 </li>
                <li>Opening time :  8 am to 5 pm.</li>
                <li><span>Fee : - </span></li>
                
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default pang1;
