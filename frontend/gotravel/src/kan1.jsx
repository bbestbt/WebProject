import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class kan1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Giant Rain Tree</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03003465_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03003465_2.jpeg"  id="touristInfo" ></img>
                <img src="https://www.thailandtravelhub.com/wp-content/uploads/2019/07/Giant-Raintree-Kanchanaburi.jpg"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/powerbeephoto/powerbeephoto1905/powerbeephoto190500035/137009409-kanchanaburi-thailand-april-28-2019-a-giant-rain-tree-chamchuri-tree-kanchanaburi-district-thailand-.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ko Samrong Subdistrict, Kanchanaburi Thailand </li>
                <li>Tel : +66 3451 1200,+66 3462 3691</li>
                <li>Opening time : Everyday 8.30-16.30 </li>
                <li>Fee : - Baht</li>
                <li>Category : Art, Culture </li>
            </ul>


        </div>
        </div>

        

       
        
        );
    }
}
 
export default kan1;

