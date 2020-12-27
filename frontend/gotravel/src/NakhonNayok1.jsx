import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class NakhonNayok1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Kang Sam Chan</h1>
            <div align="center">
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/2017111513b7c3834d8058fb1069d163f56fab0d145930.jpg"  id="touristInfo" ></img>
                <img src="https://ed.edtfiles-media.com/static-cache/resize-cache/790x528/ud/images/1/26/76478/IMG_4453_Cover.jpg"  id="touristInfo" ></img>
                <img src="https://www.chillpainai.com/src/wewakeup/img_travel/485/IMG_5521.JPG"  id="touristInfo" ></img>
                <img src="https://www.chillpainai.com/src/wewakeup/img_travel/485/IMG_5572.JPG"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Sarika Mueang Nakhon Nayok Nakhon Nayok 26000 Thailand</li>
                <li>Tel : +66 3738 3275</li>
                <li>Opening time : 8:00 - 18:00</li>
                <li>Fee : -</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default NakhonNayok1;

