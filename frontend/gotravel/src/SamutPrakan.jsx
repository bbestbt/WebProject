import React, { Component } from 'react';


import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class SamutPrakan extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Samut Prakan</h1>
        </div>
{/* 
        <div align="center"> */}

        <div class="placeProvince">
        <Link to="/SamutPrakan1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03009127_1.jpeg" alt="Fort Chulachomklao" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Fort Chulachomklao</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/SamutPrakan2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03009296_1.jpeg" alt="Phisuea Samut Fort" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phisuea Samut Fort</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/SamutPrakan3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013498_1.jpeg" alt="Wat Songtham Worawihan"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Songtham Worawihan</h6>

        </div>


        <div class="placeProvince">
        <Link to="/SamutPrakan4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03015157_1.jpeg" alt="Wat Phichai Songkhram"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phichai Songkhram</h6>

                
        </div>
        </div>

        </div>
        // </div>

        

       
        
        );
    }
}
 
export default SamutPrakan;
