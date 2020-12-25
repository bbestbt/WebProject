import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class mae extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Nan</h1>
        </div>

        <div class="placeProvince">
        <Link to="/nan1"> <img src="https://mychiangmaitour.com/wp-content/uploads/2019/04/phumin_temple01.jpg" alt="Wat Phumin" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phumin</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/nan2"> <img src="https://mychiangmaitour.com/wp-content/uploads/2019/04/phra_that_hkao_noi01.jpg" alt="Wat Phra That Khao Noi" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phra That Khao Noi</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/nan3"> <img src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10030114-711b002071284e37381b70bc344d00c9.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit" alt="Nan Noble House"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Nan Noble House</h6>

        </div>


        <div class="placeProvince">
        <Link to="/nan4"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/09/ba/8e/ab/caption.jpg" alt="Doi Samer Dao"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Doi Samer Dao</h6>
        </div>

        </div>
        </div>
        );
    }
}
 
export default mae;
