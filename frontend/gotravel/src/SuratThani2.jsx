import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SuratThani2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Khao Sok National Park</h1>
            <div align="center">
                <img src="https://cdn.getyourguide.com/img/tour/5e031bb735885.jpeg/146.jpg"  id="touristInfo" ></img>
                <img src="https://www.easydaythailand.com/wp-content/uploads/2018/12/Longtail-Khao-Sok-1024x675.jpg"  id="touristInfo" ></img>
                <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/00/a4/db.jpg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/1022_KhaoSokNationalPark_2.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Phanom Sarakham, Surat Thani Thailand</li>
                <li>Tel : +66 7739 5139</li>
                <li>Opening time : -</li>
                <li>Fee : -</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default SuratThani2;

