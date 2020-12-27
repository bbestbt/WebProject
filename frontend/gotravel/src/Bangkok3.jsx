import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Bangkok3 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Safari World</h1>
            <div align="center">
                <img src="https://hello2day.com/wp-content/uploads/2020/07/safari-world-00-1050x701.jpg"  id="touristInfo" ></img>
                <img src="https://i.ytimg.com/vi/tSMltsx-OsM/maxresdefault.jpg"  id="touristInfo" ></img>
                <img src="https://i3.wp.com/www.tourthailandbooking.com/wp-content/uploads/2017/11/BKK_safari_world-16.jpg"  id="touristInfo" ></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-O1Kz9ncBFSHnUHd7jphfxiGAdRPkcgzDWQ&usqp=CAU"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 99 Panyaintra Road Samwatawantok, Klongsamwa, Bangkok 10510 Thailand</li>
                <li>Tel : +66 2 914 4100 </li>
                <li>Opening time : Mon - Fri 9:00 - 16:30, Sat - Sun 9:00 - 17:00 </li>
                <li>Fee : Adult - 1500 Baht, Children - 1400 Baht </li>
                <li>Category : Zoo </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Bangkok3;

