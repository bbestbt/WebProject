import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class chon extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
        <div id="provinceName">
            <h1 align="center"> Chon Buri</h1>
        </div>

        <div class="placeProvince">
        <Link to="/chon1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005254_2.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khao Sam Muk</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/chon2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005245_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Bang Saen Beach</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/chon3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03006407_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Pattaya Beach</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/chon4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013321_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Sri Racha Tiger Zoo</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default chon;
