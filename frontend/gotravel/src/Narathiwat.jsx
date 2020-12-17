import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class Narathiwat extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Narathiwat</h1>
        </div>
        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/Narathiwat1"> <img src="https://static.smarttravelapp.com/data/pois/3307_kaokongjpg1_1490258495.png" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khao Kong Buddhist Park</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Narathiwat2"> <img src="https://thailandtourismdirectory.go.th/en/file/get/file/201711095d98ec0427152056397e9e35f357be87144501.JPG" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Pajo Waterfall</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Narathiwat3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013419_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Sirindhorn Peat Swamp Forest Nature Research And Study Centre</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/Narathiwat4"> <img src="https://www.touronthai.com/gallery/photo/67000027/khunlaharn-museum01.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khun Lahan Local Museum</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default Narathiwat;
