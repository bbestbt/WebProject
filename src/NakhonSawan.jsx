import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class NakhonSawan extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Nakhon Sawan</h1>
        </div>
        <div align="center">

        <div class="placeProvince">
        <Link to="/NakhonSawan1"> <img src="https://thailandtourismdirectory.go.th/en/file/get/file/2017122030f9bcbe857b4d263d907bb58e56cc0d145943.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Kao Nor Bat View Point</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/NakhonSawan2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002650_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khao Nor Khao Kaew</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/NakhonSawan3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013601_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Cultural Center Of Nakhon Sawan</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/NakhonSawan4"> <img src="https://thailandtourismdirectory.go.th/en/file/get/file/201712277c17e10b9086ecc0341a67d2bf1c43e6150849.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mae Rewa Waterfall</h6>    
        </div>
        </div>

        </div>
        </div>


        );
    }
}
 
export default NakhonSawan;
