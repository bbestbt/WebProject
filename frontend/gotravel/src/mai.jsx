import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class mai extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Chiang Mai</h1>
        </div>

        <div class="placeProvince">
        <Link to="/mai1"> <img src={require("./north/doi inthanon.jpg")} alt="doi inthanon" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Doi Inthanon</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/mai2"> <img src={require("./north/doi pui.jpg")} alt="doi pui" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Doi Pui</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/mai3"> <img src={require("./north/doi suthep.jpg")} alt="doi suthep"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phra That Doi Suthep</h6>

        </div>


        <div class="placeProvince">
        <Link to="/mai4"> <img src={require("./north/wat chedi luang.jpg")} alt="wat chedi luang"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Chedi Luang</h6>

                
        </div>

        </div>
        </div>

        

       
        
        );
    }
}
 
export default mai;
