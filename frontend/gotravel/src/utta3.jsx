import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class utta3 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Wat Klang</h1>
            <div align="center">
                <img src="https://www.thailandee.com/img/villes/roi-et/wat-klang-ming-mueang-7.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/fc/43/25/wat-klang-wiang.jpg"  id="touristInfo" ></img>
                <img src="https://patricklepetit.jalbum.net/CHIANG%20RAI/PHOTOS/MUEANG%20CHIANG%20RAI/CHIANG%20RAI%20CITY/Wat%20Klang%20Wiang/R1223376_resize.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandee.com/img/villes/buriram/wat-klang-buriram.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Tambon Nakhon Chaisi</li>
                <li>Tel : +66 5479 8702 </li>
                <li>Opening time : 6:00 - 17:00</li>
                <li>Fee : - </li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>
        );
    }
}
 
export default utta3;
