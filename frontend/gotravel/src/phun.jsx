import React, { Component } from 'react';


import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class phun extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Lamphun</h1>
        </div>

        <div class="placeProvince">
        <Link to="/phun1"> <img src="https://mychiangmaitour.com/wp-content/images/temple/phrathat_hariphunchai_temple001.jpg" alt="Wat Phra That2" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phra That Hariphunchai</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/phun2"> <img src="https://temple-thai.com/wp-content/uploads/2017/12/wat-doi-ti-1.jpg" alt=">Wat Doi Ti" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Doi Ti</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/phun3"> <img src="https://www.lamphun.go.th/uploads/gallery/attractions/14/IMG_0018.jpg" alt="Wat Phra Yuen"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phra Yuen</h6>

        </div>


        <div class="placeProvince">
        <Link to="/phun4"> <img src="https://mychiangmaitour.com/wp-content/uploads/2018/08/hariphunchai-national-museum04.jpg" alt="Hariphunchai"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Hariphunchai National Museum</h6>
                
        </div>

        </div>
        </div>
        );
    }
}
 
export default phun;
