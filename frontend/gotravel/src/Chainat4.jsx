import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Chainat4 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Mahatat Chainat</h1>
            <div align="center">
                <img src="https://api.tourismthailand.org/upload/live/article/4-2133.png"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/iwaii/iwaii1510/iwaii151000013/47282735-pagoda-in-wat-mahathat-chainat-province-thailand-antiques-old-pagoda.jpg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Wat_Mahathat_Chai_nat.jpg"  id="touristInfo" ></img>
                <img src="https://static.bangkokpost.com/media/content/20121004/432018.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Sankhaburi, Chainat Thailand</li>
                <li>Tel : +66 5642 6416 </li>
                <li>Opening time : 8:00 - 17:00</li>
                <li>Fee : -</li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Chainat4;

