import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class maha extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Maha Sarakham</h1>
        </div>

        <div class="placeProvince">
        <Link to="/maha1"> <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171124a3b499a2accc89eb49f451511009d89a102007.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Kaeng Loengchan</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/maha2"> <img src="https://www.temple-thai.com/wp-content/uploads/2017/06/wat-charoen-phon-11.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Charoen Phon Temple</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/maha3"> <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/15/86/67/79/kae-dam-wooden-bridge.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Kae Dam Bridge</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/maha4"> <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2014/04/0-Mekong-River-02.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mekong River</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default maha;
