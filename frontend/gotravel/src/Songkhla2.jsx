import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Songkhla2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">The Institute For Southern Thai Studies</h1>
            <div align="center">
                <img src= "https://www.thailandcarsrentals.com/wp-content/uploads/2016/02/Institute-for-Southern-Thai-Studies.jpg" id="touristInfo" ></img>
                <img src= "https://www.thailandcarsrentals.com/wp-content/uploads/2016/02/institute-southern-thai-studies.jpg" id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 1 Mueang Songkhla, Songkhla Thailand</li>
                <li>Tel : +66 7459 1611</li>
                <li>Opening time : 8:30 - 17:00</li>
                <li>Fee : Adult 60 Baht, Children 30 Baht</li>
                <li>Category : Education</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Songkhla2;
