import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class buri2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Buriram Castle</h1>
            <div align="center">
                <img src="https://thailandtourismdirectory.go.th/th/file/get/file/2017102300b2d1cdea1ae24f68ef92f23b95035a010330.jpg"  id="touristInfo" ></img>
                <img src="https://sites.google.com/site/burirambluecitytravel/_/rsrc/1491028535306/home/buriram-castle/buriram-castal-7-696x392.jpg"  id="touristInfo" ></img>
                <img src="https://img.wongnai.com/p/1920x0/2020/09/22/eb88e0fd68974b05a6f60b2aec36f144.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/th/file/get/file/20171121b6da0d22e244c8f42e239e2b97b58541083931.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 444/8 Moo 15 Buriram-Prakonchai Rd, Buriram 31000 Thailand</li>
                <li>Tel : +66 93 559 5588</li>
                <li>Opening time : 10:00 - 21:00 </li>
                <li>Fee : - </li>
                <li>Category : Shopping Mall </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default buri2;

