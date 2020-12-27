import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class pang extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Lampang</h1>
        </div>

        <div class="placeProvince">
        <Link to="/pang1"> <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2018/10/Wat-Lai-Hin-Luang003.jpg" alt="Wat Lai Hin" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Lai Hin</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/pang2"> <img src="https://lp-cms-production.imgix.net/2019-06/7111123fcc9fd6d6302647621eb2dae4-wat-phra-that-lampang-luang.jpg" alt="Wat Phra That" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phra That Lampang Luang</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/pang3"> <img src="https://www.thailandadventureguide.com/wp-content/uploads/2017/02/Chae-Son-National-Park-13.jpg" alt="Chae Son"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Chae Son National Park</h6>

        </div>


        <div class="placeProvince">
        <Link to="/pang4"> <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2018/10/mae-wa-national-park002.jpg" alt="Mae Wa National Park"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mae Wa National Park</h6>

                
        </div>

        </div>
        </div>

        

       
        
        );
    }
}
 
export default pang;
