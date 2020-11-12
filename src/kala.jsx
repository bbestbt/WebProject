import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class kala extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Kalasin</h1>
        </div>

        <div class="placeProvince">
        <Link to="/kala1"> <img src="https://patricklepetit.jalbum.net/KALASIN/PHOTOS/KAMALASAI/Phrathat%20Yakhu/L0805194_resize.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phrathat Yakhu</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/kala2"> <img src="https://tatapi.tourismthailand.org/tatfs/IMAGE/CustomPOI/Picture/P03012633_pic1.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phu faek forest park</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/kala3"> <img src="https://patricklepetit.jalbum.net/KALASIN/PHOTOS/SOMDET/Pha%20Sawoei/thumbs/L0729445.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Pha Sawoei</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/kala4"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/91/c8/03/wat-phutthanimit-phu.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phutthanimit</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default kala;
