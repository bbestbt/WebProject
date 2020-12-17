import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Satun1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Mu Ko Phetra National Park</h1>
            <div align="center">
                <img src="https://vietnamoriginal-travel.com/upload/images/phi-phi68.jpeg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/KK2Ll0CRnyz7NByho1SIG5WX1HmCgzEEPv3ygK-PUpU1qoYG8TwVlJkIt6PWoFNTx0SVb6vlhjrx8_OYmO4hY-p77A3B5pevt6w7-s1ZZy9NhKD1ezlWBw"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013353_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002969_1.jpeg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : La-ngu, Satun Thailand</li>
                <li>Tel : +66 7478 3074</li>
                <li>Opening time : 6:00 - 20:00 </li>
                <li>Fee : Adult 200 Baht, Children 100 Baht</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Satun1;

