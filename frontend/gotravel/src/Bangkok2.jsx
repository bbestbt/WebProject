import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Bangkok2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Arun</h1>
            <div align="center">
                <img src="https://media.timeout.com/images/103743479/630/472/image.jpg"  id="touristInfo" ></img>
                <img src="https://blog.airpaz.com/wp-content/uploads/Wat-Arun-Temple-1.png"  id="touristInfo" ></img>
                <img src="https://www.exploreshaw.com/wp-content/uploads/2018/06/DSCF6802.jpg"  id="touristInfo" ></img>
                <img src="https://livingasean.com/wp-content/uploads/2017/08/O8A3407.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 158 Wang Doem Road, Wat Arun, Bangkok Yai, Bangkok 10600, Thailand</li>
                <li>Tel : +66 2 891 2185</li>
                <li>Opening time : 8:00-18:00 </li>
                <li>Fee : 50 Baht </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Bangkok2;

