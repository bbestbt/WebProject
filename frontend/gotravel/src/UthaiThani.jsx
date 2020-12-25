import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class UthaiThani extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Uthai Thani</h1>
        </div>
        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/UthaiThani1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012823_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Uposatharam</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/UthaiThani2"> <img src="https://ak.picdn.net/shutterstock/videos/23084335/thumb/1.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Sangkat Rattana Khiri</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/UthaiThani3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012820_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Chantaram</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/UthaiThani4"> <img src="https://www.thailandforfarang.com/assets/wat-tham-khao-wong-front1.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Tam Khaowong</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default UthaiThani;
