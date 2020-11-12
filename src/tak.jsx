import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class tak extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Tak</h1>
        </div>

        <div class="placeProvince">
        <Link to="/tak1"> <img src={require("./west/maekasa.jpg")} alt="mae kasa" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mae Kasa Hot Spring</h6>

                
        </div>


        <div class="placeProvince">
        <Link to="/tak2"> <img src={require("./west/tak2.jpeg")} alt="Thi Lor Su Waterfall" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Thi Lor Su Waterfall</h6>

                
        </div>


        <div class="placeProvince">
        <Link to="/tak3"> <img src={require("./west/tak3.jpeg")} alt="Bhumibol Dam"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Bhumibol Dam</h6>
  
                
        </div>


        <div class="placeProvince">
        <Link to="/tak4"> <img src={require("./west/tak4.jpg")} alt="Doi Thule"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Doi Thule</h6>

                
        </div>

        </div>
        </div>

        

       
        
        );
    }
}
 
export default tak;
