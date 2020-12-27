import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class yaso extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Yasothon</h1>
        </div>

        <div class="placeProvince">
        <Link to="/yaso1"> <img src="https://static.smarttravelapp.com/data/pois/3675_watphrabhuttabahtjpg1_1491213619.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phra Buddhabat Temple</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/yaso2"> <img src="https://www.thailandguidebook.com/wp-content/uploads/2012/01/IMG_6735.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phra That Kong Khao Noi</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/yaso3"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/85/ac/25/the-toad-museum.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">The Toad Museum
 </h6>                
        </div>

        <div class="placeProvince">
        <Link to="/yaso4"> <img src="https://tatapi.tourismthailand.org/tatfs/image/CustomPOI/Picture/P03009907_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phu Tham Phra</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default yaso;
