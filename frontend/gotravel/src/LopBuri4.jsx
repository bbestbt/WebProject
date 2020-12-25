import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class LopBuri4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Statue Of King Narai The Great</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002581_1.jpeg"  id="touristInfo" ></img>
                <img src="https://www.lets-tour-bangkok.com/wp-content/uploads/2018/11/lopburi-king-narai.jpg"  id="touristInfo" ></img>
            

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Narai Maha Rat Road Mueang Lop Buri, Lop Buri</li>
                <li>Tel : +66 3677 0096 </li>
                <li>Opening time : 08:00 - 18:00</li>
                <li>Fee : -</li>
                <li>Category : Art, Culture, Heritage </li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default LopBuri4;
