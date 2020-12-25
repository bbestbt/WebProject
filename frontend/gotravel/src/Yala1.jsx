import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Yala1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Bang Lang National Park</h1>
            <div align="center">
                <img src="https://mpics.mgronline.com/pics/Images/558000001835401.JPEG"  id="touristInfo" ></img>
                <img src="https://4.bp.blogspot.com/__XkYaewhFE8/S-0hHXBrbWI/AAAAAAAABPs/ZAQ6KN2iTBc/s1600/e0b89ae0b8b2e0b8a3e0b8b2e0b8aee0b8b2e0b8a3e0b8b2.gif"  id="touristInfo" ></img>
                <img src="https://th.readme.me/f/12184/59b235adc94f6b2b98647a25.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03001320_1.jpeg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 5 Bannang Sata, Yala Thailand</li>
                <li>Tel : +66 7329 7099</li>
                <li>Opening time : -</li>
                <li><span>Fee : -</span></li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Yala1;
