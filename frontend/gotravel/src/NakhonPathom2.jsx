import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class NakhonPathom2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Klong Maha Sawasdi</h1>
            <div align="center">
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/201710237b848272e3f2423ea6fc9fe47861d550010359.jpg"  id="touristInfo" ></img>
                <img src="https://static.wixstatic.com/media/bacad4_fb2a666156624dcaa8cffab29f74be4c~mv2_d_3000_2000_s_2.jpg/v1/fill/w_602,h_480,al_c,q_80,usm_0.66_1.00_0.01/Khlong-Mahasawat-lotus-flowers.webp"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A4%E0%B8%81%E0%B8%A9%E0%B9%8C.jpg"  id="touristInfo" ></img>
                <img src="https://static.bangkokpost.com/media/content/20130725/524649.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Sala Ya Phutthamonthon Nakhon Pathom 73170 Thailand</li>
                <li>Tel : +66 3429 7152, +66 8 1495 9091</li>
                <li>Opening time : 8:00 - 17:00 </li>
                <li>Fee : -</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default NakhonPathom2;

