import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class tak4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Doi Thule</h1>
            <div align="center">
                <img src={require("./west/tak4.jpg")}  id="touristInfo" ></img>
                <img src={require("./west/tak42.jpg")}  id="touristInfo" ></img>
                <img src={require("./west/tak43.jpg")} id="touristInfo" ></img>
                <img src={require("./west/tak44.jpg")}  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Tha Song Yang, Tak</li>
                <li>Tel : +66 5551 4341 3 </li>
                <li>Opening time : Everyday</li>
                <li>Fee : - Baht</li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default tak4;
