import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Phetchabun4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Khao Ta Mor rat</h1>
            <div align="center">
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171228f0a2ab1916e5e11e62fdd87ccafb11c8115628.jpg"  id="touristInfo" ></img>
                <img src="https://f.ptcdn.info/780/064/000/ptzthmdmuzMKXyqA059-o.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Khok Sa-At Si Thep Phetchabun 67170 Thailand</li>
                <li>Tel : +66 5679 9508</li>
                <li>Opening time : 8:30 - 16:30</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Phetchabun4;

