import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class Phangnga extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Phangnga</h1>
        </div>

        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/Phangnga1"> <img src="https://www.khaolaktransfer.net/wp-content/uploads/2018/09/Phang-Nga-Bay-National-Park-Thailand-002-1.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phang-Nga Bay (Ao Phang Nga National Park)</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Phangnga2"> <img src="https://sealandcamp.com/uploads/news/2/news1201012711.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ton Pariwat Wildlife Sanctuary</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Phangnga3"> <img src="https://sealandcamp.com/uploads/news/12/news3430008912.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mu Koh Surin National Park</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/Phangnga4"> <img src="https://www.khaolaktransfer.net/wp-content/uploads/2018/09/Mu-Koh-Similan-National-Park-Phang-Nga-Thailand-003.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mu Koh Similan National Park</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default Phangnga;
