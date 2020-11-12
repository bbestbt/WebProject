import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class rat3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Tham Ruesi Khao Ngu</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004990_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.thai-tour.com/include/p_img_m/9/18/tt5a03c95891bdc.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandtourismdirectory.go.th/th/file/get/file/202006150ee521e65aa5166432deb1a4a3631946163636.jpg"  id="touristInfo" ></img>
                <img src="https://travel.mthai.com/app/uploads/2014/09/%E0%B8%AD%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%87%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%87%E0%B8%B9-1024x682.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ko Phlapphla, Muang Ratchaburi, Ratburi 70000 Thailand </li>
                <li>Tel : +66 3239 1397</li>
                <li>Opening time : Everyday 8.00-17.00 </li>
                <li>Fee : - Baht</li>
                <li>Category : Nature </li>
            </ul>


        </div>
        </div>

        

       
        
        );
    }
}
 
export default rat3;



