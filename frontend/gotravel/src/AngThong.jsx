import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
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
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Ang Thong</h1>
        </div>
        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/AngThong1"> <img src="https://lh3.googleusercontent.com/proxy/PRY81pxB9_3ki_LfRq74gl13X8OdDKmsfxLiRdXvbCulXU_4GkDqL1lrmPetVsX44r2uNVe8mxVAB8S4DCH0gIGL_2BzT7gUmSGyTO3AGRTFD8wN8YKlAAl42jbhVrh7bw4Vbe7xQw" class="allPlace" ></img></Link>
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
