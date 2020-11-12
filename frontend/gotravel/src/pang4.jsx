import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class pang4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Mae Wa National Park</h1>
            <div align="center">
                <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2018/10/mae-wa-national-park002.jpg"  id="touristInfo" ></img>
                <img src="https://static.bangkokpost.com/media/content/20190530/c1_1686248_190530123048.jpg"  id="touristInfo" ></img>
                <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2018/10/mae-wa-national-park001.jpg"  id="touristInfo" ></img>
                <img src="https://i2.wp.com/www.mychiangmaitravel.com/wp-content/uploads/2018/10/mae-wa-national-park011.jpg?fit=800%2C533&ssl=1"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mae Wa Thoen Lampang 52230</li>
                <li>Tel : +66 5438 0504 </li>
                <li>Opening time : 8 am - 6 pm</li>
                <li>Fee : Adult 100 Baht, Children 50 Baht</li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default pang4;
