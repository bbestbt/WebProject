import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SuratThani4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Rajjaprabha Dam (Chiao Lan Dam)</h1>
            <div align="center">
                <img src="https://image.freepik.com/free-photo/sunligh-lake-mountain-rajjaprabha-dam-chiao-lan-dam-surat-thani-province-thailand_66960-69.jpg"  id="touristInfo" ></img>
                <img src="https://image.freepik.com/free-photo/sunligh-lake-mountain-rajjaprabha-dam-chiao-lan-dam-surat-thani-province-thailand_66960-73.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013031_1.jpeg"  id="touristInfo" ></img>
                <img src="https://image.freepik.com/free-photo/sunligh-lake-mountain-rajjaprabha-dam-chiao-lan-dam-surat-thani-province-thailand_66960-70.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 3 Ban Ta Khun, Surat Thani</li>
                <li>Tel : +66 7724 2560</li>
                <li>Opening time : 7:00 - 17:00</li>
                <li>Fee : Adult 200 Baht, Children 100 Baht</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default SuratThani4;

