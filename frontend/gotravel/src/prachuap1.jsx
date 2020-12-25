import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class prachuap1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Ao Bo Thonglang</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013345_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013345_2.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013345_3.jpeg"  id="touristInfo" ></img>
                <img src="https://ak.picdn.net/shutterstock/videos/6071540/thumb/1.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address :Mu 3 Bang Saphan, Prachuap Khiri Khan </li>
                <li>Tel : +66 3251 3885</li>
                <li>Opening time : Everyday 8.00-18.00 </li>
                <li>Fee : - Baht</li>
                <li>Category : Temple </li>
            </ul>


        </div>
        </div>

        

       
        
        );
    }
}
 
export default prachuap1;



