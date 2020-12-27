import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Phitsanulok extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Phitsanulok</h1>
        </div>

        <div align="center">

        <div class="placeProvince">
        <Link to="/Phitsanulok1"> <img src="https://patricklepetit.jalbum.net/PHITSANULOK/PHOTOS/MUEANG%20PHITSANULOK/Town%20Wall%20and%20Moat/L1229328_resize.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Town Wall And Moat</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Phitsanulok2"> <img src="https://www.temple-thai.com/wp-content/uploads/2018/02/wat-ratchakhiri-hiranyaram-7.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Ratchakhiri Hiranyaram</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Phitsanulok3"> <img src="https://www.thailandee.com/img/image?v=2&a=S%3D3SdC2ud1Hv2TUVmPKrDROeLT%3DMEqJeLyUVMu-tMyfe%3DwYfL0A9L5hMEq%3Df%3DRuFpTS0ED4KpDVfED4K2DBxpTSuLyOZEve-J1m9m0%3DeJwBKmPK5acs9mvfV2T%3DK%3DRm6L0A9LR-rp5OhMwHVMqYeL5WrXPMuERH9L5YfLRm6%3DwHuJk-rLTON2TJeJTGrXvJfLwYVERHx2DeVmPevpTUxJD3z" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Nang Phaya</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/Phitsanulok4"> <img src="https://ttnotes.com/images/garden-birds-of-thailand-phitsanulok.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Thai Bird Garden</h6>    
        </div>
        </div>

        </div>
        </div>


        );
    }
}
 
export default Phitsanulok;
