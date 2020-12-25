import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class yaso3 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">The Toad Museum

</h1>
            <div align="center">
                <img src="https://itsbetterinthailand.com/wp-content/uploads/sites/4/2019/03/DJI_0482-800x600.jpg"  id="touristInfo" ></img>
                <img src="https://itsbetterinthailand.com/wp-content/uploads/sites/4/2019/03/P1088618-800x600.jpg"  id="touristInfo" ></img>
                <img src="https://itsbetterinthailand.com/wp-content/uploads/sites/4/2019/03/P1088666-800x600.jpg"  id="touristInfo" ></img>
                <img src="https://itsbetterinthailand.com/wp-content/uploads/sites/4/2019/03/DJI_0496-800x600.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Phaya Thaen Public Park, Yasothon 35000 Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 9:30 - 0:00 & 3:00 - 18:00 weekdays</li>
                <li>Fee : - </li>
                <li>Category : Museum</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default yaso3;

