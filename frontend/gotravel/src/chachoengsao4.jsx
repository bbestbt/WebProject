import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class chachoengsao4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Ban Mai 100-Year Market</h1>
            <div align="center">
                <img src="https://www.thailandtourismdirectory.go.th/en/file/get/file/20171023f0ed56f3128b4efe5c8b009658798289010425.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandtourismdirectory.go.th/en/file/get/type/thumbnail/file/2017110858916685a8f0d527523270aa6f05823f144524.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/2d/42/5c/caption.jpg"  id="touristInfo" ></img>
                <img src="https://amazing-bangkok.com/amzbkk/wp-content/uploads/ban-mai-riverside-market.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Supakit Road, Ban Mai Subdistrict, Mueang District, Chachoengsao Province 24000</li>
                <li>Tel : 089-887-7161</li>
                <li>Opening time : Saturday-Sunday and public holidays 09.00-17.00 </li>
                <li>Fee : - Baht </li>
                <li>Category : Market </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default chachoengsao4;

