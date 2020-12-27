import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class tak2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Thi Lor Su Waterfall</h1>
            <div align="center">
                <img src="https://image.freepik.com/free-photo/thi-lor-su-waterfall-is-most-beautiful-waterfall-thailand_56644-241.jpg"  id="touristInfo" ></img>
                <img src="https://readme.me/f/821/5593b1e4674fbfbc641a2ae5.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
           <ul class="infoAttract">
                <li>Address : Umphang Wildlife Sanctuary, Umphang Thailand</li>
                <li>Tel : +66 55 500 706</li>
                <li>Opening time : Everyday</li>
                <li>Fee : 0-100 Baht</li>
                <li>Category : Nature </li>
            </ul>  

        </div>
        </div>

        

       
        
        );
    }
}
 
export default tak2;
