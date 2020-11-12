import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class pang3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Chae Son National Park</h1>
            <div align="center">
                <img src="https://www.thailandadventureguide.com/wp-content/uploads/2017/02/Chae-Son-National-Park-6.jpg"  id="touristInfo" ></img>
                <img src="https://www.thainationalparks.com/img/poi/2019/10/02/384093/chae-son-hot-springs-mist-w-900.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandadventureguide.com/wp-content/uploads/2017/02/Chae-Son-National-Park-13.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandadventureguide.com/wp-content/uploads/2017/02/Chae-Son-National-Park-9.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : C haeson Mueang Pan Lampang 52240</li>
                <li>Tel : +66 89 851 3355 </li>
                <li>Opening time : 8:00 - 18:00</li>
                <li><span>Fee : Foreigner - 200 Baht (Children : 100 Baht)</span></li>
                <li>Local - 40 Baht (Children : 20 Baht)</li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default pang3;
