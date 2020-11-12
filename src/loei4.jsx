import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class loei4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Pahuaylad Temple</h1>
            <div align="center">
                <img src="https://fastly.4sqi.net/img/general/600x600/482770874_IBY7cXLcfiFUU8vY3pJ_IRwhTpJLIr9fLXrwHHpQD3c.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/th/file/get/file/20180329084159a61c0298dde3f4c9a40ce2c836115410.jpg"  id="touristInfo" ></img>
                <img src="http://patricklepetit.jalbum.net/LOEI/PHOTOS/PHU%20RUEA/Wat%20Pa%20Huay%20Lat/Q1222169_resize.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/iVJC3mD4FjbErFgZSKeoO5eJufR7-jJ88TvoII5zIjsB8uWiODe5R8vbg-p3jF9E7kz_Ndgp_ObxigOCldupWMHDhbM"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 135 Moo 3 Santom Subdistrict, Phu Ruea 42160 Thailand</li>
                <li>Tel : +66 96 767 6745</li>
                <li>Opening time : 7:00 - 19:00</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default loei4;

