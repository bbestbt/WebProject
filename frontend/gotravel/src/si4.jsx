import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class si4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Si Sa Ket Aquarium
</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/12/50/76/01/img-20180313-120747-largejpg.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandee.com/img/villes/si-saket/sisaket-aquarium.jpg"  id="touristInfo" ></img>
                <img src="https://i.ytimg.com/vi/0OfoCfhFOaE/maxresdefault.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/12/50/76/02/img-20180313-121213-largejpg.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Amphoe Mueang, Sisaket Thailand</li>
                <li>Tel : +66 45 612 686</li>
                <li>Opening time : Close on Monday, 10:00 - 16:00</li>
                <li>Fee : Adult - 30 Baht, Children - 20 Baht</li>
                <li>Category : Aquarium</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default si4;

