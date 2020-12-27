import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class kan extends Component {
    
    render() { 
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Kanchanaburi</h1>
        </div>

        <div class="placeProvince">
        <Link to="/kan1"> <img src="https://previews.123rf.com/images/powerbeephoto/powerbeephoto1905/powerbeephoto190500035/137009409-kanchanaburi-thailand-april-28-2019-a-giant-rain-tree-chamchuri-tree-kanchanaburi-district-thailand-.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Giant Rain Tree</h6>

                
        </div>


        <div class="placeProvince">
        <Link to="/kan2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013278_1.jpeg"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Tham Khao Noi</h6>

                
        </div>


        <div class="placeProvince">
        <Link to="/kan3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007983_1.jpeg" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Namtok Sai Yok Yai</h6>
  
                
        </div>


        <div class="placeProvince">
        <Link to="/kan4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013163_1.jpeg"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Chang Pheuk Mountain</h6>

                
        </div>

        </div>
        </div>

   
       
        
        );
    }
}
export default kan;
