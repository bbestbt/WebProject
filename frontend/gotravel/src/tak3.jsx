import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class tak3 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Bhumibol Dam</h1>
            <div align="center">
                <img src="https://www.egat.co.th/en/images/Media/PD/bhumibol/a_9.jpg"  id="touristInfo" ></img>
                <img src="https://www.egat.co.th/en/images/Media/PD/bhumibol/a_7.jpg"  id="touristInfo" ></img>
                <img src="https://www.egat.co.th/en/images/Media/PD/bhumibol/b_2.JPG"  id="touristInfo" ></img>
                <img src="https://www.egat.co.th/en/images/Media/PD/bhumibol/a_5.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
          <ul class="infoAttract">
                <li>Address : 180/2 Moo 6 Sam Ngao, Tak</li>
                <li>Tel : +66 5554 9509</li>
                <li>Opening time : Everyday at 6.00 - 18.00 </li>
                <li>Fee : - Baht</li>
                <li>Category: Nature</li>
            </ul> 

        </div>
        </div>

        

       
        
        );
    }
}
 
export default tak3;
