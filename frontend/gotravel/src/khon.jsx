import React, { Component } from 'react';

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class khon extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Khon Kaen</h1>
        </div>

        <div class="placeProvince">
        <Link to="/khon1"> <img src="https://temple-thai.com/wp-content/uploads/2018/01/wat-nong-waeng-3.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Nong Waeng Temple</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/khon2"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/0c/3c/ab/7e/dinosaurs-at-the-lake.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Bueng Kaen Nakhon</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/khon3"> <img src="https://d1bv4heaa2n05k.cloudfront.net/user-images/1456483688281/shutterstock-351711935_main_1456483695987.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Thung Setthi</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/khon4"> <img src="https://i.pinimg.com/600x315/78/0a/e0/780ae002223a808195c56066d773e6fb.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Pa Thamma Utthayan</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default khon;
