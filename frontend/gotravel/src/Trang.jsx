import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class Trang extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Trang</h1>
        </div>

        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/Trang1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000934_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Hat Chao Mai National Park</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Trang2"> <img src="https://tatapi.tourismthailand.org/tatfs/image/CustomPOI/Picture/P03003761_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khao Pina Cave</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Trang3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000031_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ko Lao Liang Nong</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/Trang4"> <img src="https://2.bp.blogspot.com/-xgi-TMQpka0/TdAA_sDFy7I/AAAAAAAAGIw/wbPc_8dxHAo/s1600/khao-kob-cave-thailand.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Lay Khao Kob Cave</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default Trang;
