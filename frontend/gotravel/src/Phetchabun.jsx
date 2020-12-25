import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Phetchabun extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Phetchabun</h1>
        </div>

        <div align="center">

        <div class="placeProvince">
        <Link to="/Phetchabun1"> <img src="https://www.thailandtourismdirectory.go.th/en/file/get/file/201801059941ac74db0bcfdcf8550d9ecfa995a9114722.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Kaeng Bangrajan</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Phetchabun2"> <img src="https://www.thaitravelloc.com/picture/pic125-1.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Kaeng Wang Nam Yen</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Phetchabun3"> <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/b21lpf4ystruqqomfvhl/5D4N%20Khao%20Kho%20Private%20Tour%20from%20Bangkok%20By%20Oriental%20Holiday.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khao kho</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/Phetchabun4"> <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171228f0a2ab1916e5e11e62fdd87ccafb11c8115628.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khao Ta Mor rat</h6>    
        </div>
        </div>

        </div>
        </div>


        );
    }
}
 
export default Phetchabun;
