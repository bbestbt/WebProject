import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class mae2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Tham Lot Cave</h1>
            <div align="center">
                <img src="https://img.theculturetrip.com/768x432/wp-content/uploads/2017/11/24836384881_f812928d4d_o.jpg"  id="touristInfo" ></img>
                <img src="https://www.ithaka.travel/blog/wp-content/uploads/2019/05/46377787044_52062b5fe3_o.jpg"  id="touristInfo" ></img>
                <img src="https://i.ytimg.com/vi/Owv6MEEuaq4/maxresdefault.jpg"  id="touristInfo" ></img>
                <img src="https://www.discoverythailand.com/Images/Place/ID_1190_Large.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Tham Lot Pang Ma Pha Mae Hong Son 58150</li>
                <li>Tel : +66 53 617 203</li>
                <li>Opening time : 9:00 am. - 6:00 pm.</li>
                <li>Fee : 150 Baht </li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default mae2;
