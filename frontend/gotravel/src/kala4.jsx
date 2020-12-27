import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class kala4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Phutthanimit</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012638_1.jpeg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0c/82/57/58/grounds-of-wat-phuttha.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/91/c8/03/wat-phutthanimit-phu.jpg"  id="touristInfo" ></img>
                <img src="https://temple-thai.com/wp-content/uploads/2020/08/wat-phuttha-nimit-5.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Sahatsakhan Thailand</li>
                <li>Tel : +66 44 104 002</li>
                <li>Opening time : 8:00 - 18:00</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default kala4;

