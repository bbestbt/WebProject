import React, { Component } from 'react';

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class ratcha extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Nakhon Ratchasima</h1>
        </div>

        <div class="placeProvince">
        <Link to="/ratcha1"> <img src="https://thai-rest.com/wp-content/uploads/2018/10/Cambodia-in-Thailand-Phimai-Historical-Park.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phimai Historical Park</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/ratcha2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013299_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Sala Loi</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/ratcha3"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/d9/aa/89/view-point-of-lamtakong.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Lamtakhong Dam</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/ratcha4"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/d3/a1/43/photo0jpg.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Bung Ta Lua Water Park</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default ratcha;
