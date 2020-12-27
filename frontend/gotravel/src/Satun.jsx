import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class Satun extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Satun</h1>
        </div>
{/* 
        <div align="center"> */}

        <div class="placeProvince">
        <Link to="/Satun1"> <img src="https://vietnamoriginal-travel.com/upload/images/phi-phi68.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mu Ko Phetra National Park</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Satun2"> <img src="https://i.ytimg.com/vi/_x90Q5b87_c/maxresdefault.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Tarutao National Park</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Satun3"> <img src="https://purewows3.imgix.net/images/articles/2018_07/tree_wedding_hanging_vibes.jpg?auto=format,compress&cs=strip" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Nature Wedding</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/Satun4"> <img src="https://fastly.4sqi.net/img/general/600x600/50775557_-rs9K3Vt2zfvBXKwE0F-WmvP4o96-wVN5Wn76wzHkRA.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Thung Nui Hot Spring</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default Satun;
