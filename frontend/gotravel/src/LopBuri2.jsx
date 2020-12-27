import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class LopBuri2 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat San Paolo</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002485_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.latinamericanstudies.org/thailand/wat-san-paolo.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ruam Mit Road Mueang Lop Buri, Lop Buri</li>
                <li>Tel : +66 3677 0096</li>
                <li>Opening time :06:00 - 18:00</li>
                <li>Fee : - </li>
                <li>Category : Art, Culture, Heritage </li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default LopBuri2;
