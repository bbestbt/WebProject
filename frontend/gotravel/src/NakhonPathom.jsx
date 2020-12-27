import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class NakhonPathom extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Nakhon Pathom</h1>
        </div>
        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/NakhonPathom1"> <img src="https://www.mythailandphotos.com/wp-content/uploads/2017/04/IMG_0115.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Lum Phaya Floating Market</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/NakhonPathom2"> <img src="https://thailandtourismdirectory.go.th/en/file/get/file/201710237b848272e3f2423ea6fc9fe47861d550010359.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Klong Maha Sawasdi</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/NakhonPathom3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P01003006_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Western Thai Culture Institute</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/NakhonPathom4"> <img src="https://www.expique.com/wp-content/historic_uploads/2016/12/don-wai-03-1024x768.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Don Wai Floating Market</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default NakhonPathom;
