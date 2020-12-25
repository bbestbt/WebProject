import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SamutPrakan3 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Songtham Worawihan</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013498_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.gerryganttphotography.com/images/samutprakan/DTHSP0142WatSongthamWorawihan.jpg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Wat_Songtham_Worawihan%2C_Phra_Pradaeng%2C_Thailand.jpg/1024px-Wat_Songtham_Worawihan%2C_Phra_Pradaeng%2C_Thailand.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Phetchahueng Road Phra Pradaeng, Samut Prakan</li>
                <li>Tel : +66 2463 5433 </li>
                <li>Opening time : 08:00 - 16:30</li>
                <li><span>Fee : Foreigner - 200 Baht (Children : 100 Baht)</span></li>
                <li>Fee : - Baht</li>
                <li>Category : Art, Culture, Heritage</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default SamutPrakan3;
