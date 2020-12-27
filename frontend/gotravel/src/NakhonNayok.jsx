import React, { Component } from 'react';

import {
  
    Link,

  } from 'react-router-dom';

class NakhonNayok  extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Nakhon Nayok </h1>
        </div>
        <div align="center">

        <div class="placeProvince">
        <Link to="/NakhonNayok1"> <img src="https://thailandtourismdirectory.go.th/en/file/get/file/2017111513b7c3834d8058fb1069d163f56fab0d145930.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Kang Sam Chan</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/NakhonNayok2"> <img src="https://www.egat.co.th/en/images/Media/PD/dam-khundan/AUU_0025.JPG" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khun Dan Prakan Chon Dam</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/NakhonNayok3"> <img src="https://thailandtourismdirectory.go.th/en/file/get/file/2017120796a3d8abd3d9ebfce97c9a2441979816164108.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Pha Diao Dai View Point</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/NakhonNayok4"> <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171023b8068159ff14ff2c49d11bfc17f3df8a010424.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Tham Sarika</h6>    
        </div>
        </div>

        </div>
        </div>


        );
    }
}
 
export default NakhonNayok;
