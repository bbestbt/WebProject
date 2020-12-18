import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SingBuri1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Heroes Of Khai Bang Rachan Monument And Khai Bang Rachan Park</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03003167_1.jpeg"  id="touristInfo" ></img>
                <img src="https://patricklepetit.jalbum.net/SINGBURI/PHOTOS/KHAI%20BANG%20RACHANG/Heroes%20of%20Khai%20Bang%20Rachan%20Monument/O1229822_resize.jpg"  id="touristInfo" ></img>
           
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Khai Bang Rachan, Sing Buri</li>
                <li>Tel : +66 3659 7126 </li>
                <li>Opening time : 08:00 - 17:00</li>
                <li><span>Fee : - </span></li>
                <li>Category : Art, Culture, Heritage</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default SingBuri1;
