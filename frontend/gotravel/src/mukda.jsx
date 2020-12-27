import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class mukda extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Mukdahan</h1>
        </div>

        <div class="placeProvince">
        <Link to="/mukda1"> <img src="https://itsbetterinthailand.com/wp-content/uploads/sites/4/2019/03/Wat-Roi-Phra-Putthabat-Phu-Manorom-11.57.19.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phu Manorom</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/mukda2"> <img src="https://lh3.googleusercontent.com/proxy/irjokmOrhb9t6ZI7rqwgDlaAQzbmCWOI0l0M7RbNdCh4brZmbhvehB6X3OGpRRrkHdl_IA-p4cPy_3K2EWrKaF8zZXZerrtUDf_owxycXffcCKHT01vwLw" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mukdahan National Park</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/mukda3"> <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/17/66/5b/6e/photo0jpg.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Srimongkol Nua</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/mukda4"> <img src="https://lh3.googleusercontent.com/proxy/G4XUN8zmFZSFOVsnnQOMX5SceXypVRF7yPY2Xl0lCc6H3LaXvidY7c5aQ6ilbcmM-C_hbTzlh8OGVYV4FcHdt37_1jgGuim2cNUM4yHZnMyPhGLaO5EvanSOg6TJyxPxRY2OMJBukiDbpgrmSiUiAzGTXQ" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Si Mongkhon Tai</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default mukda;
