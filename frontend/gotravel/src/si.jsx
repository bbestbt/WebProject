import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class si extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Si Sa Ket</h1>
        </div>

        <div class="placeProvince">
        <Link to="/si1"> <img src="https://www.thailandguidebook.com/wp-content/uploads/2012/01/IMG_1493.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Prasat Hin Wat Sa Khampaeng Yai</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/si2"> <img src="https://media-cdn.tripadvisor.com/media/photo-p/1a/d7/13/aa/caption.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Pa Si Mongkhon Rattanaram</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/si3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03003435_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Maha Phuttharam </h6>                
        </div>

        <div class="placeProvince">
        <Link to="/si4"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/12/50/76/01/img-20180313-120747-largejpg.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Si Sa Ket Aquarium</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default si;
