import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class rat2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Ratchaburi National Museum</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007651_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007651_2.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007651_3.jpeg"  id="touristInfo" ></img>
                <img src="https://itsbetterinthailand.com/wp-content/uploads/sites/4/2019/03/IMG_6278.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Woradet Road Mueang Ratchaburi, Ratchaburi </li>
                <li>Tel : +66 3232 1513</li>
                <li>Opening time : Wednesday to Sunday 9.00-16.00 </li>
                <li>Fee : 30 Baht</li>
                <li>Category : Museum </li>
            </ul>


        </div>
        </div>

        

       
        
        );
    }
}
 
export default rat2;



