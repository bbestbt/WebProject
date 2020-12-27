import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class SamutSongkhram extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Samut Songkhram</h1>
        </div>
        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/SamutSongkhram1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004751_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Chang-Eng Siamese Twins Memorial And Boat Museum</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/SamutSongkhram2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012964_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Amphawa Chaipattana Nurak</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/SamutSongkhram3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005383_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Yi San</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/SamutSongkhram4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005429_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Bang Khae Noi</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default SamutSongkhram;
