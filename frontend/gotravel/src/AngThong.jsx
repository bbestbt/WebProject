import React, { Component } from 'react';

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class AngThong extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Ang Thong</h1>
        </div>
        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/AngThong1"> <img src="https://amicimieiphukettravelagency.com/wp-content/uploads/2018/05/WAT-MUANG1.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Muang</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/AngThong2"> <img src="https://www.paiduaykan.com/province/central/angthong/pic/bangsadet7.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ban Bang Sadet Court Doll Centre</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/AngThong3"> <img src="https://thailandtourismdirectory.go.th/th/file/get/file/20180828d3ca1af602dd4d617a99b5e4c6027d32143443.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Pa Mok Worawihan</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/AngThong4"> <img src="https://www.paiduaykan.com/province/central/angthong/pic/watsangkratai1.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Sang Kratai</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default AngThong;
