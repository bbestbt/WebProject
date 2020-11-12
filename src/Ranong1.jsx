import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Ranong1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Ranong Archipelago National Park</h1>
            <div align="center">
                <img src="https://similanstour.com/wp-content/uploads/2019/11/DJI_02681111-1.jpg"  id="touristInfo" ></img>
                <img src="https://www.khaolaktransfer.net/wp-content/uploads/2018/09/Laem-Son-National-Park-Ranong-Thailand-003-1.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 192 Moo 4 Mueang Ranong, Ranong Thailand</li>
                <li>Tel : +66 7781 3828</li>
                <li>Opening time : -</li>
                <li><span>Fee : -</span></li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Ranong1;
