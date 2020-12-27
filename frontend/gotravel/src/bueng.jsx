import React, { Component } from 'react';

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class bueng extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Bueng Kan</h1>
        </div>

        <div class="placeProvince">
        <Link to="/bueng1"> <img src="https://media.nationthailand.com/images/news/2019/10/29/30377849/800_1ab9450b6d18805.jpg?v=1572327293" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phu Sing Bueng Kan</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/bueng2"> <img src="https://www.thailandee.com/img/villes/nong-khai/wat-phu-tok-bueng-khan-62.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phu Tok</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/bueng3"> <img src="https://timesamui.com/upload/places/08/70/wat-sawang-arom-chaweng.jpg?1544105657" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Sawang Arom</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/bueng4"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/10/28/35/73/seven-colors-waterfall.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Seven Colors Waterfall</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default bueng;
