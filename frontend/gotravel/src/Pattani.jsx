import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class Pattani extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Pattani</h1>
        </div>
        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/Pattani1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013070_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Princess GalyaniVadhana Institute Of Cultural Studies</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Pattani2"> <img src="https://www.thailandtourismdirectory.go.th/th/file/get/file/20171101ee867cc006807674f4dcaf587c0bdd27101625.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Yaring Mangrove Education Center</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Pattani3"> <img src="https://static.smarttravelapp.com/data/pois/1592_ratchadajpg1_1485831253.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Hat Ratchadaphisek</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/Pattani4"> <img src="https://media-cdn.tripadvisor.com/media/photo-c/768x250/0f/e5/44/56/img-25600713-130444-largejpg.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Laem Ta Chi (Laem Pho)</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default Pattani;
