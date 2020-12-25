import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Phitsanulok3 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Wat Nang Phaya</h1>
            <div align="center">
                <img src= "https://www.thailandee.com/img/image?v=2&a=S%3D3SdC2ud1Hv2TUVmPKrDROeLT%3DMEqJeLyUVMu-tMyfe%3DwYfL0A9L5hMEq%3Df%3DRuFpTS0ED4KpDVfED4K2DBxpTSuLyOZEve-J1m9m0%3DeJwBKmPK5acs9mvfV2T%3DK%3DRm6L0A9LR-rp5OhMwHVMqYeL5WrXPMuERH9L5YfLRm6%3DwHuJk-rLTON2TJeJTGrXvJfLwYVERHx2DeVmPevpTUxJD3z" id="touristInfo" ></img>
                <img src= "https://tatapi.tourismthailand.org/tatfs/IMAGE/CustomPOI/Picture/P03012850_pic1.jpg" id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Cha Kan Bun Road Mueang Phitsanulok, Phitsanulok Thailand</li>
                <li>Tel : +66 5525 8972</li>
                <li>Opening time : 6:00 - 18:30</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Phitsanulok3;
