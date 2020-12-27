import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class phanom extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Nakhon Phanom</h1>
        </div>

        <div class="placeProvince">
        <Link to="/phanom1"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/d8/97/76/caption.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Paya Sri Satta Nakarat</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/phanom2"> <img src="https://www.renown-travel.com/images/wat-mahathat-ayutthaya-l.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Maha That Temple</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/phanom3"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Prathatphanom_03.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phra That Phanom</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/phanom4"> <img src="https://patricklepetit.jalbum.net/NAKHON%20PHANOM/PHOTOS/THA%20UTHEN/Phra%20That%20Tha%20Uthen/K1203377_resize.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phra That Tha Uthen</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default phanom;
