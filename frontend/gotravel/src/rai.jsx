import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class rai extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Chiang Rai</h1>
        </div>

        <div class="placeProvince">
        <Link to="/rai1"> <img src="https://images.thrillophilia.com/image/upload/s--xde2w8wT--/c_fill,dpr_1.0,g_auto,h_450,w_753/v1/attractions/images/000/000/824/original/1554463057_shutterstock_91667066.jpg.jpg" alt="Wat Rong Khun" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Rong Khun</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/rai2"> <img src="https://images.thrillophilia.com/image/upload/s--fsIZQ_2w--/c_fill,dpr_1.0,g_auto,h_450,w_753/v1/attractions/images/000/003/847/original/1554445567_shutterstock_763791562.jpg.jpg" alt="Doi Mae Salong" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Doi Mae Salong</h6>
 
        </div>

        <div class="placeProvince">
        <Link to="/rai3"> <img src="https://images.thrillophilia.com/image/upload/s--00u-uSuv--/c_fill,dpr_1.0,g_auto,h_450,w_753/v1/attractions/images/000/000/866/original/1280px-Phucheefa2.jpg.jpg" alt="phu chi fah"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phu Chi Fah</h6>

        </div>

        <div class="placeProvince">
        <Link to="/rai4"> <img src="https://images.thrillophilia.com/image/upload/s--GgueevZL--/c_fill,dpr_1.0,g_auto,h_450,w_753/v1/attractions/images/000/003/849/original/1554449695_shutterstock_340978880.jpg.jpg"alt="plakung"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Huai Pla Kung</h6>

                
        </div>

        </div>
        </div>
  
        );
    }
}
 
export default rai;
