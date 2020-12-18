import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SamutSongkhram1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Chang-Eng Siamese Twins Memorial And Boat Museum</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03004751_1.jpeg"  id="touristInfo" ></img>
                <img src="https://i0.wp.com/www.richardbarrow.com/wp-content/uploads/2015/05/IMG_1427.jpg?resize=500%2C333"  id="touristInfo" ></img>
              
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Samut Songkhram, Samut Songkhram</li>
                <li>Tel : 0 3471 1333</li>
                <li>Opening time : weekdays from 8.00 am-4.00 pm and on weekends from 8.00 am-12.00 pm. </li>
                <li>Fee : 15 Baht</li>
                <li>Category : Art, Culture, Heritage </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default SamutSongkhram1;

