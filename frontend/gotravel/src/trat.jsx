import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class trat extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Trat</h1>
        </div>

        <div class="placeProvince">
        <Link to="/trat1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002767_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mu Ko Chang National Park</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/trat2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03001859_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Namtok Than Mayom</h6>    
        </div>


        <div class="placeProvince">
        <Link to="/trat3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007022_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ko Kradat</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/trat4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007162_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ko Mak</h6>    
        </div>

        </div>
        </div>

        

       
        
        );
    }
}
 
export default trat;
