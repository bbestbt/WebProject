import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class kan3 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Namtok Sai Yok Yai</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007983_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03003957_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.thainationalparks.com/img/poi/2016/02/09/181905/sai-yok-yai-waterfall-w-900.jpg"  id="touristInfo" ></img>
                <img src="https://img.painaidii.com/images/20170518_6_1495076565_4241.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address :  Sai Yok, Kanchanaburi</li>
                <li>Tel : 034 686 024</li>
                <li>Opening time : Everyday 6.00-18.00 </li>
                <li><span>Fee : Foreigner 300 Baht for adults and 200 Baht for children</span>
                <br></br>
                <span>Thai 100 Baht for adults and 50 Baht for children</span>
                </li>
                
                <li>Category : Nature</li>
            </ul>


        </div>
        </div>

        

       
        
        );
    }
}
 
export default kan3;


