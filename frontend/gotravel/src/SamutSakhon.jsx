import React, { Component } from 'react';


import {
    
    Link,
   
  } from 'react-router-dom';

class SamutSakhon extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Samut Sakhon</h1>
        </div>

        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/SamutSakhon1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03015264_1.jpeg" alt="Phra Klang Nam" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phra Klang Nam</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/SamutSakhon2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002854_1.jpeg" alt="Phanthainorasingh Shrine" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phanthainorasingh Shrine</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/SamutSakhon3"> <img src="https://tatapi.tourismthailand.org/tatfs/image/CustomPOI/Picture/P03001368_1.jpeg" alt="Wat Nangsao"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Nangsao</h6>

        </div>


        <div class="placeProvince">
        <Link to="/SamutSakhon4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004705_1.jpeg"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Pa Chai Rangsi</h6>

                
        </div>
        </div>

        </div>
        // </div>

        

       
        
        );
    }
}
 
export default SamutSakhon;
