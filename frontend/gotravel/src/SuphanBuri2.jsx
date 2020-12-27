import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SuphanBuri2 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Phra Si Rattana Mahathat</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005447_1.jpeg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Phra_Phuttha_Chinnarat_%28II%29.jpg/1200px-Phra_Phuttha_Chinnarat_%28II%29.jpg"  id="touristInfo" ></img>
                <img src="https://www.timsthailand.com/wp-content/uploads/2019/03/wat-phra-si-rattana-mahathat-chaliang.jpg"  id="touristInfo" ></img>
              
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Suphan Buri, Suphan Buri </li>
                <li>Tel : -</li>
                <li>Opening time : 08:00 - 17:00</li>
                <li>Fee : - Baht </li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>
        );
    }
}
 
export default SuphanBuri2;
