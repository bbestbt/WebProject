import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Ranong2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Kra Isthmus</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03001813_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.thailandtourismdirectory.go.th/en/file/get/type/thumbnail/size/1000/file/2018061170c639df5e30bdee440e4cdf599fec2b144004.JPG"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Kra Buri, Ranong Thailand</li>
                <li>Tel : +66 7784 6323</li>
                <li>Opening time : 8:00 am. - 17:00 pm.</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Ranong2;
