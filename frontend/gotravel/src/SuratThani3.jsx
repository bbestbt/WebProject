import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SuratThani3 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Tai Rom Yen National Park</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013033_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.bangkokpost.com/photos_content/large/prefix_1/0243/15243/15243-1295251813s24dkjwmrt.jpg"  id="touristInfo" ></img>
                <img src="https://alchetron.com/cdn/tai-rom-yen-national-park-61557e10-60c3-40b5-aec9-a0ded3b1d0c-resize-750.jpg"  id="touristInfo" ></img>
                <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/6c/3f.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ban Na San, Surat Thani Thailand</li>
                <li>Tel : +66 7734 4633</li>
                <li>Opening time : 8:30 - 16:30</li>
                <li>Fee : Adult 200 Baht, Children 100 Baht</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default SuratThani3;

