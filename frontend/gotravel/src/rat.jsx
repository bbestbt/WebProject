import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class rat extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Ratchaburi</h1>
        </div>

        <div class="placeProvince">
        <Link to="/rat1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004293_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Nong Hoi</h6>

                
        </div>


        <div class="placeProvince">
        <Link to="/rat2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007651_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ratchaburi National Museum</h6>

                
        </div>


        <div class="placeProvince">
        <Link to="/rat3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004990_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Tham Ruesi Khao Ngu</h6>
  
                
        </div>


        <div class="placeProvince">
        <Link to="/rat4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03014208_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ban Ku Bua Ancient Town</h6>

                
        </div>

        </div>
        </div>

        

       
        
        );
    }
}
 
export default rat;
