import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class SingBuri extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Sing Buri</h1>
        </div>

       
        <div class="placeProvince">
        <Link to="/SingBuri1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03003167_1.jpeg"  class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Heroes Of Khai Bang Rachan Monument And Khai Bang Rachan Park</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/SingBuri2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004974_1.jpeg"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Kudi Thong</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/SingBuri3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005608_1.jpeg"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Muang</h6>

        </div>


        <div class="placeProvince">
        <Link to="/SingBuri4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000909_1.jpeg"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phra Prang Muni</h6>

                
        </div>
        </div>

        </div>
        

        

       
        
        );
    }
}
 
export default SingBuri;
