import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Phuket3 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Nam Tok Bang Pae</h1>
            <div align="center">
                <img src="https://media.phuket-plaza.com/images/pre/large/170129-140736.jpg"  id="touristInfo" ></img>
                <img src="https://ttnotes.com/images/nam-tok-bang-pae-khao-phra-taew-royal-wildlife-forest-reserve-1.jpg"  id="touristInfo" ></img>
                <img src="https://ttnotes.com/images/nam-tok-bang-pae-khao-phra-taew-royal-wildlife-forest-reserve-3.jpg"  id="touristInfo" ></img>
                <img src="https://ttnotes.com/images/nam-tok-bang-pae-khao-phra-taew-royal-wildlife-forest-reserve.jpg"  id="touristInfo" ></img>     

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Thalang, Phuket Thailand</li>
                <li>Tel : +66 7626 0491</li>
                <li>Opening time : -</li>
                <li>Fee : - </li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Phuket3;

