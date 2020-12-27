import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class et extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Roi Et</h1>
        </div>

        <div class="placeProvince">
        <Link to="/et1"> <img src="https://thailandtourismdirectory.go.th/th/file/get/file/20171128be53a0541a6d36f6ecb879fa2c584b08221458.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Nuea</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/et2"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/5d/ad/bb/photo2jpg.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Bueng Phlan Chai</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/et3"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/90/61/15/20171221-143232-largejpg.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Pha Nam Yoi </h6>                
        </div>

        <div class="placeProvince">
        <Link to="/et4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03001817_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Burapha Phiram</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default et;
