import React, { Component } from 'react';


import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class Saraburi extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Saraburi</h1>
        </div>

        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/Saraburi1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005928_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Namtok Chet Sao Noi National Park</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/Saraburi2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03003943_1.jpeg" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Pha Yao</h6>
 
        </div>

        <div class="placeProvince">
        <Link to="/Saraburi3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002681_1.jpeg" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phra Phuttachai</h6>

        </div>

        <div class="placeProvince">
        <Link to="/Saraburi4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004160_1.jpeg"  class="allPlace"></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Samuha Pradittharam</h6>

                
        </div>
        </div>

        </div>
        // </div>
  
        );
    }
}
 
export default Saraburi;
