import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class LopBuri1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Tong Pu</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000434_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.orientalarchitecture.com/gallery/thailand/lopburi/wat-tong-pu/photos/wat-tong-pu01.jpg"  id="touristInfo" ></img>
              
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 87 Moo 1 Mueang Lop Buri, Lop Buri</li>
                <li>Tel : +66 3641 3910,+66 8 1528 1734 </li>
                <li>Opening time : 06:00 - 18:00</li>
                <li><span>Fee : -</span></li>
                <li>Category : Art, Culture, Heritage </li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default LopBuri1;
