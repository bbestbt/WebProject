import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class PhraNakhonSiAyutthaya4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Archive Of Queen Suriyothai Monument</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03014322_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.sirinyas-thailand.de/wp-content/uploads/2015/05/Ayutthaya-Queen_Suriyothai_Monument_photo-credit-Peerapong-Prasutr-wikimedia.org_.jpg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/en/d/d7/Queen_suriyothai0609_cropped.jpg"  id="touristInfo" ></img>
                <img src="https://go.ayutthaya.go.th/wp-content/uploads/2017/09/ay-v200f.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Phra Nakhon Si Ayutthaya, Phra Nakhon Si Ayutthaya Thailand</li>
                <li>Tel : +66 3532 2730 1</li>
                <li>Opening time : -</li>
                <li>Fee : -</li>
                <li>Category : Museums</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default PhraNakhonSiAyutthaya4;
