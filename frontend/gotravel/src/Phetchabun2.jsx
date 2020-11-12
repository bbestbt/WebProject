import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Phetchabun2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Kaeng Wang Nam Yen</h1>
            <div align="center">
                <img src="https://www.thaitravelloc.com/picture/pic125-1.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandtourismdirectory.go.th/en/file/get/file/2018010533482bf0fe83e82fc895b341e01da2f8102436.JPG"  id="touristInfo" ></img>
                <img src="https://www.thailandtourismdirectory.go.th/en/file/get/type/thumbnail/file/201801038fbba38809598c1e8cbd27f2fa5c8c19111757.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandtourismdirectory.go.th/en/file/get/type/thumbnail/file/20171228d5b21008df667b8948fdc2f8c6e43ea2171041.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Nong Mae Na Khao kho Phetchabun 67270 Thailand</li>
                <li>Tel : +66 8 7207 7849</li>
                <li>Opening time : 8:00 - 18:00 </li>
                <li>Fee : Adult 400 Baht, Children 200 Baht</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Phetchabun2;

