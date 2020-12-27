import React, { Component } from 'react';


import {
    
    Link,
   
  } from 'react-router-dom';

class utta extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Uttaradit</h1>
        </div>

        <div class="placeProvince">
        <Link to="/utta1"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Ton_Sak_Yai_National_Park.jpg" alt="Sak Yai Forest Park" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Sak Yai Forest Park</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/utta2"> <img src="https://www.egat.co.th/en/images/Media/PD/sirikit/03_4.jpg" alt="Sirikit Dam" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Sirikit Dam</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/utta3"> <img src="https://www.thailandee.com/img/villes/roi-et/wat-klang-ming-mueang-7.jpg" alt="Wat Klang"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Klang</h6>

        </div>


        <div class="placeProvince">
        <Link to="/utta4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012758_1.jpeg" alt="Wat Yai Tha Sao"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Yai Tha Sao</h6>

                
        </div>

        </div>
        </div>
        );
    }
}
 
export default utta;
