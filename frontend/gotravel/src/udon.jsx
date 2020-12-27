import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class udon extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Udon Thani</h1>
        </div>

        <div class="placeProvince">
        <Link to="/udon1"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Rock_formation_in_Phu_Phra_Bat.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phu Prabhat Historical Park</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/udon2"> <img src="https://i1.wp.com/udoninfo.com/wp-content/uploads/2016/10/Wat-Phothisomphon_1200PX-800PX.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phothisomphon</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/udon3"> <img src="https://www.thaizer.com/wp-content/uploads/2015/10/UdonThaniThaizer.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Nong Prajak Public Park
 </h6>                
        </div>

        <div class="placeProvince">
        <Link to="/udon4"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/9f/3b/9c/chao-pu-ya-shrine-udon.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Chao Pu-Ya Shrine</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default udon;
