import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class prachuap2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Namtok Pa La-U</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012172_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012172_2.jpeg"  id="touristInfo" ></img>
                <img src="https://www.asiatravelgate.com/wp-content/uploads/2017/09/Namtok-Pa-La-U-Hua-Hin-Prachuap-Khiri-Khan-Thailand-001.jpg"  id="touristInfo" ></img>
                <img src="https://raszagaln.files.wordpress.com/2013/04/parau_huahin_1.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address :Mu 2 Hua Hin, Prachuap Khiri Khan </li>
                <li>Tel : +66 3264 6294</li>
                <li>Opening time : Everyday 8.00-17.00 </li>
                <li>Fee : Adult 100 Baht and children 50 Baht</li>
                <li>Category : Nature </li>
            </ul>


        </div>
        </div>

        

       
        
        );
    }
}
 
export default prachuap2;



