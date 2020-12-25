import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class NakhonSawan4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Mae Rewa Waterfall</h1>
            <div align="center">
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/201712277c17e10b9086ecc0341a67d2bf1c43e6150849.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171227edec525e703a4cd71cdf3d753f0570e2150909.jpg"  id="touristInfo" ></img>
                <img src="https://i.pinimg.com/originals/16/34/ee/1634ee0e70eba2b3bb5f3a107aced6b6.jpg"  id="touristInfo" ></img>
                <img src="https://f.tpkcdn.com/images-source/eedf758ef03bf2a6a458f32efc5b49eb.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mahapho Kao Liao Nakhon Sawan 62120 Thailand</li>
                <li>Tel : +66 5576 6436</li>
                <li>Opening time : 8:00 - 18:00</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default NakhonSawan4;

