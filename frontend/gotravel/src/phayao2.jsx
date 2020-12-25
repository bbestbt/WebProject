import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phayao2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Nantaram temple</h1>
            <div align="center">
                <img src="https://www.thaifoodandtravel.com/blog/wp-content/uploads/2014/05/wat-nantaram-05.jpg"  id="touristInfo" ></img>
                <img src="https://mychiangmaitour.com/wp-content/uploads/2019/05/Nantaram_Temple09.jpg"  id="touristInfo" ></img>
                <img src="https://i1.wp.com/www.mychiangmaitravel.com/wp-content/uploads/2019/07/nantaram-temple01.jpg?fit=1200%2C800&ssl=1"  id="touristInfo" ></img>
                <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2019/07/nantaram-temple03.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 1 Moo 13 Chiang Kham, Phayao</li>
                <li>Tel : +66 5445 1636</li>
                <li>Opening time : 8:00 - 18:00</li>
                <li>Fee : - </li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>
        );
    }
}
 
export default phayao2;
