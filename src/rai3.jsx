import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class rai3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Phu Chi Fah</h1>
            <div align="center">
                <img src= "https://i2.wp.com/www.tielandtothailand.com/wp-content/uploads/2017/04/Phu-Chi-Fah-Nautical-Sunrise.jpg?resize=1000%2C563&ssl=1"  id="touristInfo" ></img>
                <img src= "https://i2.wp.com/www.tielandtothailand.com/wp-content/uploads/2017/04/Phu-Chi-Fah-Sunrise.jpg?resize=1000%2C563&ssl=1"  id="touristInfo" ></img>
                <img src= "https://mychiangmaitour.com/wp-content/uploads/2018/02/Phu_Chi_Fah10.jpg"  id="touristInfo" ></img>
                <img src= "https://i2.wp.com/www.tielandtothailand.com/wp-content/uploads/2017/04/Phu-Chi-Fah-Peek.jpg?resize=1000%2C563&ssl=1"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Phu Chi Fah Forest Park, Po, Wiang Kaen, Chiang Rai 57310 Thailand</li>
                <li>Tel : +66 5371 4914 </li>
                <li>Opening time : 8AM to 5PM</li>
                <li>Fee : - </li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default rai3;
