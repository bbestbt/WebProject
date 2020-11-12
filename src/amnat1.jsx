import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class amnat1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Tham Saeng Phet</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03001964_1.jpeg"  id="touristInfo" ></img>
                <img src="https://temple-thai.com/wp-content/uploads/2019/11/wat-si-yaek-saeng-phet-16.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03001964_2.jpeg"  id="touristInfo" ></img>
                <img src="https://temple-thai.com/wp-content/uploads/2019/11/wat-si-yaek-saeng-phet-9.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 80 Moo 10 Nhongmasaew Mueng Amnat Chareon Amnat Chareon 37000</li>
                <li>Tel : +66 83 679 4794</li>
                <li>Opening time : 7:30 - 17:00 </li>
                <li>Fee : Adult 10 Baht (Children 5 Baht)</li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default amnat1;

