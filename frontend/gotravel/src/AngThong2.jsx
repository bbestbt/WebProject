import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class AngThong2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Ban Bang Sadet Court Doll Centre</h1>
            <div align="center">
                <img src="https://www.paiduaykan.com/province/central/angthong/pic/bangsadet7.jpg"  id="touristInfo" ></img>
                <img src="https://ed.edtfiles-media.com/ud/book/content/1/151/452520/image-810x480.png"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03017208_1.jpeg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/th/file/get/file/201810019d23c21daad2e49686b7d6629d6f1875104356.JPEG"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Bang Sadet, Pa Mok, Ang Thong 14130 Thailand</li>
                <li>Tel : +66 3566 2995, +66 3586 8317</li>
                <li>Opening time : 9:00 - 16:00 </li>
                <li>Fee : - </li>
                <li>Category : Museums </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default AngThong2;

