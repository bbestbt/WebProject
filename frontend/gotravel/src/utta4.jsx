import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class utta4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Wat Yai Tha Sao</h1>
            <div align="center">
                <img src="https://patricklepetit.jalbum.net/UTTARADIT/PHOTOS/MUEANG%20UTTARADIT/Wat%20Yai%20Tha%20Sao/thumbs/L1226342.jpg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B8%E0%B9%82%E0%B8%9A%E0%B8%AA%E0%B8%96.JPG/1200px-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B8%E0%B9%82%E0%B8%9A%E0%B8%AA%E0%B8%96.JPG"  id="touristInfo" ></img>
                <img src="https://patricklepetit.jalbum.net/UTTARADIT/PHOTOS/MUEANG%20UTTARADIT/Wat%20Yai%20Tha%20Sao/thumbs/L1226348.jpg"  id="touristInfo" ></img>
                <img src="https://patricklepetit.jalbum.net/UTTARADIT/PHOTOS/MUEANG%20UTTARADIT/Wat%20Yai%20Tha%20Sao/thumbs/L1226352.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 733 Samran Ruen Mueang Uttaradit, Uttaradit</li>
                <li>Tel : +66 5548 8553 </li>
                <li>Opening time : 8.00 a.m.-5.00 p.m.</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default utta4;
