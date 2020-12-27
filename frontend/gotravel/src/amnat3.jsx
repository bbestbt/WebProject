import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class amnat3 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Pho Sila</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03001928_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.temple-thai.com/wp-content/uploads/2018/01/wat-pho-sila-19.jpg"  id="touristInfo" ></img>
                <img src="https://www.temple-thai.com/wp-content/uploads/2018/01/wat-pho-sila-1.jpg"  id="touristInfo" ></img>
                <img src="https://temple-thai.com/wp-content/uploads/2018/01/wat-pho-sila-7.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : King Amphoe Lue Amnat, Amnat Charoen</li>
                <li>Tel : - </li>
                <li>Opening time : 8:00 - 18:30 </li>
                <li>Fee : - </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default amnat3;

