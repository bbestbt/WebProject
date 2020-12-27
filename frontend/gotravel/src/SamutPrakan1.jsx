import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SamutPrakan1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Fort Chulachomklao</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03009127_1.jpeg"  id="touristInfo" ></img>
                <img src="https://paknam.com/wp-content/uploads/2016/04/IMG_6399.jpg"  id="touristInfo" ></img>
                

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Phra Samut Chedi, Samut Prakan</li>
                <li>Tel : +66 2475 6260,+66 8 6663 3294 </li>
                <li>Opening time : 08:30 - 18:00</li>
                <li><span>Fee : - </span></li>
                
                <li>Category : Art, Culture, Heritage</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default SamutPrakan1;
