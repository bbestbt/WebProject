import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phun2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Wat Doi Ti</h1>
            <div align="center">
                <img src="https://www.temple-thai.com/wp-content/uploads/2017/12/wat-doi-ti-17.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/09/f3/29/5d/caption.jpg"  id="touristInfo" ></img>
                <img src="https://ak.picdn.net/shutterstock/videos/1014131516/thumb/1.jpg"  id="touristInfo" ></img>
                <img src="https://www.temple-thai.com/wp-content/uploads/2017/12/wat-doi-ti-4.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Tambon Pa Sak, Mueang Lamphun District, Lamphun Province, Thailand </li>
                <li>Tel : -</li>
                <li>Opening time : 8.00 am. to 5.00pm</li>
                <li>Fee : 15 Baht </li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>
        );
    }
}
 
export default phun2;
