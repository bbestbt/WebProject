import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Chainat1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Chainat Bird Park</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013611_1.jpeg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0b/10/b1/e8/photo2jpg.jpg"  id="touristInfo" ></img>
                <img src="https://thedailyroar.com/wp-content/uploads/2016/06/birdpark2.jpg"  id="touristInfo" ></img>
                <img src="https://static.smarttravelapp.com/data/pois/1483_birdparkjpg4_1485338979.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Chai Nat, Chainat Thailand</li>
                <li>Tel : +66 5647 6617</li>
                <li>Opening time : 8:00 - 17:00 </li>
                <li>Fee : Adult 100 Baht, Children 50 Baht</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Chainat1;

