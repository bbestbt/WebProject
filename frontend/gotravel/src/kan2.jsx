import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class kan2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Wat Tham Khao Noi</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013278_1.jpeg"  id="touristInfo" ></img>
                <img src="http://kanchanaburi.go.th/au/tourkan2015/images/IMG_1387.JPG"  id="touristInfo" ></img>
                <img src="http://kanchanaburi.go.th/au/tourkan2015/images/8477.jpg"  id="touristInfo" ></img>
                <img src="https://www.talontiew.com/wp-content/uploads/2019/01/DSC_7204-750x400.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address :  99/9 Nong Sakae Soi 2 Tambon Wang Sala, Tha Muang 71110 Thailand</li>
                <li>Tel : +66 3465 5233</li>
                <li>Opening time : Everyday 8.30-16.30 </li>
                <li>Fee : - Baht</li>
                <li>Category : Temple</li>
            </ul>


        </div>
        </div>

        

       
        
        );
    }
}
 
export default kan2;


