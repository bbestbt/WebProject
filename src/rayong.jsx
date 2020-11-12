import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class rayong extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
        <div id="provinceName">
            <h1 align="center"> Rayong</h1>
        </div>

        <div class="placeProvince">
        <Link to="/rayong1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005264_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Laem Mae Phim</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/rayong2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000019_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Thung Prong Thong</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/rayong3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03008421_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khao Laem Ya-Mu Ko Samet National Park</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/rayong4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005244_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ko Kudi (Ko Kut)</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default rayong ;
