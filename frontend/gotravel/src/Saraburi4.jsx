import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Saraburi4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Samuha Pradittharam</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004160_1.jpeg"  id="touristInfo" ></img>
                <img src= "https://patricklepetit.jalbum.net/SARABURI/PHOTOS/SAO%20HAI/Wat%20Samuha%20Pradittharam/O0801162_resize.jpg"  id="touristInfo" ></img>
               
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address :  2 Moo 7, Phichai Narong Songkhram Road Sao Hai, Saraburi</li>
                <li>Tel : +66 3633 2346 </li>
                <li>Opening time : 08:30 - 16:30</li>
                <li><span>Fee : - </span></li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Saraburi4;
