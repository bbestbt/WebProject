import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class Chainat extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Chainat</h1>
        </div>
        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/Chainat1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013611_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Chainat Bird Park</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Chainat2"> <img src="https://static.bangkokpost.com/media/content/20160922/1995828.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Chao Phraya Dam</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Chainat3"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%94%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7_%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3_-_Wat_Phra_Kaew%2C_Temple_of_Emerald_Buddha%2C_Bangkok%2C_Thailand.jpg/1280px-thumbnail.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phra Kaeo Temple</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/Chainat4"> <img src="https://api.tourismthailand.org/upload/live/article/4-2133.png" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Mahatat Chainat</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default Chainat;
