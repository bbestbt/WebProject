import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Trang4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Lay Khao Kob Cave</h1>
            <div align="center">
                <img src="https://2.bp.blogspot.com/-xgi-TMQpka0/TdAA_sDFy7I/AAAAAAAAGIw/wbPc_8dxHAo/s1600/khao-kob-cave-thailand.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/IMAGE/CustomPOI/Picture/P03013106_pic1.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 59/1 Moo 1, Trang-Krabi Road Huai Yot, Trang Thailand</li>
                <li>Tel : +66 7550 0117</li>
                <li>Opening time : 8.00 - 17.00</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Trang4;

