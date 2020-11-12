import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Songkhla extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Songkhla</h1>
        </div>

        <div align="center">

        <div class="placeProvince">
        <Link to="/Satun1"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/a9/dd/14/photo0jpg.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Chang Puak Camp</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/Satun1"> <img src="https://www.thailandcarsrentals.com/wp-content/uploads/2016/02/Institute-for-Southern-Thai-Studies.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">The Institute For Southern Thai Studies</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/Satun1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03008374_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phra Mahathat Chedi Traiphop Traimongkon</h6>

        </div>


        <div class="placeProvince">
        <Link to="/Satun1"> <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/16/f6/63/9e/namtok-ton-nga-chang.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ton Nga Chang Waterfall</h6>

                
        </div>

        </div>

        </div>
        </div>

        

       
        
        );
    }
}
 
export default Songkhla;
