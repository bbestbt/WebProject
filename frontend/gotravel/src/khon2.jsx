import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class khon2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Bueng Kaen Nakhon </h1>
            <div align="center">
                <img src="https://patricklepetit.jalbum.net/KHON%20KAEN/PHOTOS/KHON%20KAEN%20district/Bueng%20Kaen%20Nakhon/O0204212_resize.jpg"  id="touristInfo" ></img>
                <img src="https://www.bangkokpost.com/photos_content/large/prefix_1/0839/21839/21839-1300786000wl6l7ahuak.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0c/3c/ab/1d/views-around-the-lake.jpg"  id="touristInfo" ></img>
                <img src="https://f.tpkcdn.com/images-720/1f0299474788b508f763bd6b407d4dfc.jpeg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 367 Klangmueng Naimueng Mueng Khon Kaen Khon Kaen 40000</li>
                <li>Tel : -</li>
                <li>Opening time : All time </li>
                <li>Fee : -</li>
                <li>Category : Nature, Landmark </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default khon2;

