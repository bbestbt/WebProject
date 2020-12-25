import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class khai1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Pho Chai</h1>
            <div align="center">
                <img src="https://jonesyinthailand.com/wp-content/uploads/2018/03/Wat_Pho_Chai_nong_khai_temple-9.jpg"  id="touristInfo" ></img>
                <img src="https://blog.traveloka.com/th/wp-content/uploads/sites/5/2018/09/Wat-Pho-Chai-Nong-Khai.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandee.com/img/villes/nong-khai/wat-pho-chai-nong-khai-13.jpg"  id="touristInfo" ></img>
                <img src="https://jonesyinthailand.com/wp-content/uploads/2018/03/Wat_Pho_Chai_nong_khai_temple-19.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 873 Prajak Silpakom Rd., Nong Khai 43000 Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 8:00 - 18:30</li>
                <li>Fee : -</li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default khai1;

