import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class amnat extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Amnat Chareon</h1>
        </div>

        <div class="placeProvince">
        <Link to="/amnat1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03001964_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Tham Saeng Phet</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/amnat2"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/a4/ec/dc/1-largejpg.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Don Chao Pu Botanical Park</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/amnat3"> <img src="https://www.temple-thai.com/wp-content/uploads/2018/01/wat-pho-sila-18.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Pho Sila</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/amnat4"> <img src="https://www.temple-thai.com/wp-content/uploads/2017/11/wat-phraya-tikaram-3.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Chaiya Tikaram</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default amnat;
