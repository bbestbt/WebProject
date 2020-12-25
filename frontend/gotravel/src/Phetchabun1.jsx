import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Phetchabun1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Kaeng Bangrajan</h1>
            <div align="center">
                <img src="https://www.thailandtourismdirectory.go.th/en/file/get/file/201801059941ac74db0bcfdcf8550d9ecfa995a9114722.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandtourismdirectory.go.th/en/file/get/file/20180105b389f7f7bb1c32ab0099db5d028c7bb5114717.jpg"  id="touristInfo" ></img>
                <img src="https://sites.google.com/a/samakkhi.ac.th/sthan-thi-thxng-theiyw-ni-phechrburn/_/rsrc/1487598649659/kaeng-bangracan/Bangrajan-063.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandtourismdirectory.go.th/en/file/get/file/20180105267aef043f5a55426d8027c983a80e2d114704.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Nong Mae Na Khao kho Phetchabun 67270 Thailand</li>
                <li>Tel : +66 8 7889 3855</li>
                <li>Opening time : 8:00 - 16:00 </li>
                <li>Fee : -</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Phetchabun1;

