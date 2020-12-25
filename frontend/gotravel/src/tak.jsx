import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';
 import maekasa from "./west/maekasa.jpg"
 import t2 from "./west/tak2.jpeg"
 import t3 from "./west/tak2.jpeg"
 import t4 from "./west/tak2.jpeg"
class tak extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Tak</h1>
        </div>

        <div class="placeProvince">
        <Link to="/tak1"> <img src={maekasa} alt="mae kasa" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mae Kasa Hot Spring</h6>

                
        </div>


        <div class="placeProvince">
        <Link to="/tak2"> <img src={t2} alt="Thi Lor Su Waterfall" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Thi Lor Su Waterfall</h6>

                
        </div>


        <div class="placeProvince">
        <Link to="/tak3"> <img src={t3} alt="Bhumibol Dam"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Bhumibol Dam</h6>
  
                
        </div>


        <div class="placeProvince">
        <Link to="/tak4"> <img src={t4} alt="Doi Thule"  class="allPlace"   ></img></Link>
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
