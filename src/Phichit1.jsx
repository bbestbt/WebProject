import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Phichit1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Crocodile Farm</h1>
            <div align="center">
                <img src="https://paknam.com/wp-content/uploads/2016/04/IMG_6821-1.jpg"  id="touristInfo" ></img>
                <img src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/59/2016/11/08050524/26-Samuth-Prakan-Crocodile-farm-and-zoo.jpeg"  id="touristInfo" ></img>
                <img src="https://www.somethingjam.com/wp-content/uploads/2013/03/104_1139.jpg"  id="touristInfo" ></img>
                <img src="https://www.lets-tour-bangkok.com/wp-content/uploads/2018/06/PTY_million_year_park-2.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Nai Mueang Mueang Phichit Phichit 66000 Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 9:00 - 18:00 </li>
                <li>Fee : -</li>
                <li>Category : Zoo </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Phichit1;

