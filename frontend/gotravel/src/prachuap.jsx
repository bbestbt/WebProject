import React, { Component } from 'react';

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class prachuap extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Prachuap Khiri Khan</h1>
        </div>

        <div class="placeProvince">
        <Link to="/prachuap1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013345_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ao Bo Thonglang</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/prachuap2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012172_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Namtok Pa La-U</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/prachuap3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03008165_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khao Sam Roi Yot National Park</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/prachuap4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013798_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ko Thalu, Ko Sang, Ko Sing</h6>    
        </div>

        </div>
        </div>

        

       
        
        );
    }
}
 
export default prachuap;
