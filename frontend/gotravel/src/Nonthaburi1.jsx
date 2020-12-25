import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Nonthaburi1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">The Museum Of Nonthaburi</h1>
            <div align="center">
                <img src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/59/2016/11/08040047/10-Nonthaburi-Museum.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/09/9f/57/58/museum-of-nonthaburi.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Nonthaburi, Nonthaburi Thailand</li>
                <li>Tel : +66 2525 0622</li>
                <li>Opening time : - </li>
                <li>Fee : -</li>
                <li>Category : Museums </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Nonthaburi1;

