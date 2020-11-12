import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class chachoengsao3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Mini Murrah Farm</h1>
            <div align="center">
                <img src="http://img.painaidii.com/images/20131122_6_1385107667_823875.jpg"  id="touristInfo" ></img>
                <img src="http://img.painaidii.com/images/20131122_6_1385107665_291720.jpg"  id="touristInfo" ></img>
                <img src="http://img.painaidii.com/images/20131122_6_1385108812_834522.jpg"  id="touristInfo" ></img>
                <img src="http://img.painaidii.com/images/20131122_6_1385108750_248930.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 79/4 Moo 2, Sibedsok Subdistrict, Ban Pho District, Chachoengsao Province 24140</li>
                <li>Tel : 081-819-2819</li>
                <li>Opening time : Monday to Friday 11.00-21.00, Saturday and Sunday 10:00-21:00  </li>
                <li>Fee : - Baht </li>
                <li>Category : Farm </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default chachoengsao3;

