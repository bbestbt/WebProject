import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Ranong extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Ranong</h1>
        </div>

        <div align="center">

        <div class="placeProvince">
        <Link to="/Ranong1"> <img src="https://similanstour.com/wp-content/uploads/2019/11/DJI_02681111-1.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ranong Archipelago National Park</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/Ranong2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03001813_1.jpeg" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Kra Isthmus</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/Ranong3"> <img src="https://thailandtourismdirectory.go.th/en/file/get/file/201712198b50c34507aed97a9493feaad4521d74140148.jpg"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phon Rang Hot Spring</h6>

        </div>


        <div class="placeProvince">
        <Link to="/Ranong4"> <img src="https://lh3.googleusercontent.com/proxy/boMPTQdnIoHKonFBn__KhRulmQfvMXqwhEO6hbZuSB96EePyfUo8J9ksuQ3DYgDePhqzer0N3erd7UthxWB6yFa970D3GRuFR4bHZj1cQa5mXaN3cZ2Ptg"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Lam Nam Kra Buri National Park</h6>

                
        </div>
        </div>

        </div>
        </div>
        );
    }
}
 
export default Ranong;
