import React, { Component } from 'react';

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class chachoengsao extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Chachoengsao</h1>
        </div>

        <div class="placeProvince">
        <Link to="/chachoengsao1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005061_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Sothonwararam Worawihan</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/chachoengsao2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03016911_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Saman Ratanaram</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/chachoengsao3"> <img src="http://img.painaidii.com/images/20131122_6_1385107667_823875.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mini Murrah Farm</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/chachoengsao4"> <img src="https://www.thailandtourismdirectory.go.th/en/file/get/file/20171023f0ed56f3128b4efe5c8b009658798289010425.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ban Mai 100-Year Market</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default chachoengsao;
