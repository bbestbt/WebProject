import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class prachin  extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
        <div id="provinceName">
            <h1 align="center"> Prachin Buri</h1>
        </div>

        <div class="placeProvince">
        <Link to="/prachin1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03006413_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Chao Phya Abhaibhubejhr Building</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/prachin2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007607_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ton Pho Si Maha Pho (The Great Bodhi Tree)</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/prachin3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005428_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Si Mahosot Ancient Town</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/prachin4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03006168_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phan Hin Ancient Monument</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default prachin ;
