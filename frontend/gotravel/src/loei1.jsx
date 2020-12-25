import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class loei1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Phu Ruea National Park</h1>
            <div align="center">
                <img src="https://lh3.googleusercontent.com/proxy/kHiPifzWssTm30Ckv5ybEhds_xpijjAzXEMsM8dLgPm62iGwQGVVtOQXyey29phTnw1esTGA3IzPxQ7stZ5y4bRyteBml76WgxZJIIeVaVNJHWvHT7kk"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Phu_Ruea_View.jpg"  id="touristInfo" ></img>
                <img src="https://www.discoverythailand.com/Images/Place/ID_1165_Large.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/201801154f2ec78550efb5f2f01c2f3ef15dab73165436.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Phu Ruea 42160 Thailand</li>
                <li>Tel : +66 4281 0965</li>
                <li>Opening time : 5:00 - 20:00 </li>
                <li>Fee : Foreigner - 200 Baht (Children - 100 Baht)</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default loei1;

