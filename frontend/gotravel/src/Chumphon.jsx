import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Chumphon extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Chumphon</h1>
        </div>
        <div align="center">

        <div class="placeProvince">
        <Link to="/Chumphon1"> <img src="https://thailandtourismdirectory.go.th/th/file/get/file/2018080967deedc0d028df59d364f0570fef24f4134304.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Suan Nai Dum</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Chumphon2"> <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Mu_Ko_Chumphon_National_Park_Chumphon_Thailand.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mu Ko Chumphon National Park</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Chumphon3"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/14/fc/84/ed/wat-khao-chedi.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khao Chedi Temple</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/Chumphon4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007735_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Matsee Mountain</h6>    
        </div>
        </div>

        </div>
        </div>


        );
    }
}
 
export default Chumphon;
