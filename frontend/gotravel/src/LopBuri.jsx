import React, { Component } from 'react';


import {
    
    Link,
   
  } from 'react-router-dom';

class LopBuri extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Lop Buri</h1>
        </div>
        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/LopBuri1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000434_1.jpeg" alt="Wat Tong Pu" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Tong Pu</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/LopBuri2"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002485_1.jpeg" alt="Wat San Paolo" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat San Paolo</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/LopBuri3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03003384_1.jpeg"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Kraison Siharat Hall (The Chub Sorn Lake Pavilion Or Yen Pavilion)</h6>

        </div>


        <div class="placeProvince">
        <Link to="/LopBuri4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002581_1.jpeg" alt="Statue Of King Narai The Great"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Statue Of King Narai The Great</h6>
        </div>
        </div>

        </div>
        // </div>
        );
    }
}
 
export default LopBuri;
