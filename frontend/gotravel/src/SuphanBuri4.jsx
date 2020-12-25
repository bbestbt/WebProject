import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SuphanBuri4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Bueng Nong Sarai Histrorical Site</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012928_1.jpeg"  id="touristInfo" ></img>
                <img src="https://welovetogo.com/wp-content/uploads/2019/10/%E0%B9%82%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%93%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B6%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B2%E0%B8%AB%E0%B8%A3%E0%B9%88%E0%B8%B2%E0%B8%A202.jpg"  id="touristInfo" ></img>
               
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Don Chedi, Suphan Buri</li>
                <li>Tel : +66 3554 5466 </li>
                <li>Opening time : 09:00 - 17:00</li>
                <li>Fee : - Baht</li>
                <li>Category : Art, Culture, Heritage </li>
            </ul> 
        </div>
        </div>       
        );
    }
}
 
export default SuphanBuri4;
