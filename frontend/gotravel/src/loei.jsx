import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class loei extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Loei</h1>
        </div>

        <div class="placeProvince">
        <Link to="/loei1"> <img src="https://www.thailandguidebook.com/wp-content/uploads/2012/01/IMG_7660.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phu Ruea National Park</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/loei2"> <img src="https://www.paiduaykan.com/province/Northeast/bungkan/pic/phutok8.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phu Thog</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/loei3"> <img src="https://www.chillpainai.com/src/wewakeup/img_travel/746/1444798270-WatNeramit_6.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Neramit Wipattasana</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/loei4"> <img src="https://thailandtourismdirectory.go.th/th/file/get/file/20180329cfab81dd0226d0704a194590c85cb3d3115345.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Pahuaylad Temple</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default loei;
