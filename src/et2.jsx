import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class et2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Bueng Phlan Chai</h1>
            <div align="center">
                <img src="https://patricklepetit.jalbum.net/ROI%20ET/PHOTOS/MUEANG%20ROI%20ET/Bueng%20Phlan%20Chai/K1128146_resize.jpg"  id="touristInfo" ></img>
                <img src="https://patricklepetit.jalbum.net/ROI%20ET/PHOTOS/MUEANG%20ROI%20ET/Bueng%20Phlan%20Chai/Bueng%20Phlan%20Chai/folderthumb.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03014058_1.jpeg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/14/ec/c8/7c/the-beautiful-wat-bueng.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Phlan Chai Rd., Roi Et 45000 Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 5:00 - 19:00 </li>
                <li>Fee : -</li>
               
                <li>Category : Landmark </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default et2;

