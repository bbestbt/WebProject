import React, { Component } from 'react';

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class sako extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Sakon Nakhon</h1>
        </div>

        <div class="placeProvince">
        <Link to="/sako1"> <img src="https://www.thailandee.com/img/image?v=2&a=23qM32n6d1Hv2TUVmPKrDROeLT%3DMEqJeLyUVMu-tM5gZL5WhLvgZ2yOFDROqpDGh%3DyffLku-2yohJygVLruxpThtLruFpThKL5WF2040mr-r%3D5VN%3DyQrXPp-aR-r2yAeJ5f3mPeF%3DTU9ERHPL5u-MvAxM5VtLrm6YxI9mvUtp5g9mPe3M0AVERHhL5BeJvVVJRm6Jvg9M5I9m0YedvIrXvJfLwYVCGzz" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Tham Pha Daen</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/sako2"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/ba/53/30/caption.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phra That Choeng Chum Worawihan Temple</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/sako3"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Nong_Han_near_Sakon_Nakhon%2C_Thailand.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Nong Han </h6>                
        </div>

        <div class="placeProvince">
        <Link to="/sako4"> <img src="https://muangboranmuseum.com/wp-content/uploads/2020/02/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%99%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%87%E0%B9%80%E0%B8%A7%E0%B8%87-4-e1580974728212.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phra That Narai Cheng Weng</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default sako;
