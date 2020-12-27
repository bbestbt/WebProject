import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SingBuri4 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Phra Prang Muni</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000909_1.jpeg"  id="touristInfo" ></img>
                <img src="https://temple-thai.com/wp-content/uploads/2019/09/wat-phra-prang-muni-19.jpg"  id="touristInfo" ></img>
              
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 7 Mueang Sing Buri, Sing Buri</li>
                <li>Tel : +66 3652 0079</li>
                <li>Opening time : 8 am. - 5 pm.</li>
                <li>Fee : - Baht</li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default SingBuri4;
