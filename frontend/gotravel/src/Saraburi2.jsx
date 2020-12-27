import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Saraburi2 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Pha Yao</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03003943_1.jpeg"  id="touristInfo" ></img>
                <img src= "https://thailandtourismdirectory.go.th/en/file/get/file/20171227bbf6955fb628556c24f6442c82ac5a49161012.jpg"  id="touristInfo" ></img>
               
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 1 Sao Hai, Saraburi</li>
                <li>Tel : +66 3633 3075 </li>
                <li>Opening time : 8 am to 5 pm</li>
                <li><span>Fee : - Baht </span></li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Saraburi2;
