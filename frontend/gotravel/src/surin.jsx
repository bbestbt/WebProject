import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class surin extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Surin</h1>
        </div>

        <div class="placeProvince">
        <Link to="/surin1"> <img src="https://3.bp.blogspot.com/-kB_ET2nQV6c/VRU_QVjPZGI/AAAAAAAABOw/DCQcvX2rLLE/s1600/%E0%B8%9E%E0%B8%B4%E0%B8%9E%E0%B8%B4%E0%B8%98%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C%2B1_1425196708.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Surin National Museum</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/surin2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013204_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">City Pillar Shrine</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/surin3"> <img src="https://patricklepetit.jalbum.net/SURIN/PHOTOS/MUEANG%20SURIN/Prasat%20Mueang%20Tee/I1122530_resize.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Prasat Mueang Thi </h6>                
        </div>

        <div class="placeProvince">
        <Link to="/surin4"> <img src="https://temple-thai.com/wp-content/uploads/2018/01/wat-burapharam-ubon-ratchathani-2.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Burapharam</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default surin;
