import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class SuphanBuri extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Suphan Buri</h1>
        </div>

        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/SuphanBuri1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03003386_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Sam Chuk Old Market</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/SuphanBuri2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005447_1.jpeg" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phra Si Rattana Mahathat</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/SuphanBuri3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000398_1.jpeg" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Don Chedi Monument</h6>

        </div>


        <div class="placeProvince">
        <Link to="/SuphanBuri4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012928_1.jpeg"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Bueng Nong Sarai Histrorical Site</h6>
                
        </div>
        </div>

        </div>
        // </div>
        );
    }
}
 
export default SuphanBuri;
