import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class surin3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Prasat Mueang Thi
</h1>
            <div align="center">
                <img src="https://www.discoverythailand.com/Images/Place/ID_864_Large.jpg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Prasat_Muang_Tam-027.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/fYXtNTG6tOQigMfH7vTOnQzk0rRopSdfcMFoqn-bcv6AD3ANgvdYLvuxz99HbUKhrnZI-F_2gxyQfdz5rwqtXXPmvyiop6OWbtZr8BR7RUA"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Prasat_Muang_Sing_Historical_Park%2C_Thakilen%2C_Thailand_%28368971761%29.jpg/1280px-Prasat_Muang_Sing_Historical_Park%2C_Thakilen%2C_Thailand_%28368971761%29.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 1 Mueang Thi, Mueng Surin, Surin, Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 6:00 - 18:00</li>
                <li>Fee : - </li>
                <li>Category : Landmark</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default surin3;
