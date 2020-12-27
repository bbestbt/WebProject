import React, { Component } from 'react';

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class Phatthalung extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Phatthalung</h1>
        </div>
{/* 
        <div align="center"> */}

        <div class="placeProvince">
        <Link to="/Phatthalung1"> <img src="https://fanclubthailand.co.uk/wp-content/uploads/2020/01/Phatthalung_Thale_Noi_1600.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Thale Noi</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Phatthalung2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013067_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khao Aok Talu</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Phatthalung3"> <img src="https://www.lovethailand.org/thumb.php?src=images/banner/content/lovethailand_banner_20132204104854.jpg&x=300&y=300" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Namtok Phraiwan</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/Phatthalung4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013061_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phu Pha Petch Cave</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default Phatthalung;
