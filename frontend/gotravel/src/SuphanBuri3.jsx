import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phun3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Phra Yuen</h1>
            <div align="center">
                <img src="https://mychiangmaitour.com/wp-content/images/lamphun/wat_phra_yuen02.jpg"  id="touristInfo" ></img>
                <img src="https://mychiangmaitour.com/wp-content/uploads/2018/08/wat_phra_yuen08.jpg"  id="touristInfo" ></img>
                <img src="https://static.smarttravelapp.com/data/pois/503_phrayuen_1483241400.jpg"  id="touristInfo" ></img>
                <img src="https://sanuksanuk.files.wordpress.com/2011/07/img_4957.jpg"  id="touristInfo" ></img>    
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Amphoe Mueang, Lamphun Thailand</li>
                <li>Tel : +66 5581 6583 </li>
                <li>Opening time : 8 am until 6 pm.</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        );
    }
}
 
export default phun3;
