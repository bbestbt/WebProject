import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class phet extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Phetchaburi</h1>
        </div>

        <div class="placeProvince">
        <Link to="/phet1"> <img src="https://tatapi.tourismthailand.org/tatfs/image/CustomPOI/Picture/P03006069_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Kaeng Krachan Dam</h6>

                
        </div>


        <div class="placeProvince">
        <Link to="/phet2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005400_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Hat Cha-Am</h6>

                
        </div>


        <div class="placeProvince">
        <Link to="/phet3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013393_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Hat Chao Samran</h6>
  
                
        </div>


        <div class="placeProvince">
        <Link to="/phet4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03006443_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Maruekhathaiyawan Palace</h6>

                
        </div>

        </div>
        </div>

        

       
        
        );
    }
}
 
export default phet;
