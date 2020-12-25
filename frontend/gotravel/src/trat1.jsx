import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class trat1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Mu Ko Chang National Park</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002767_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002767_2.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002767_3.jpeg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/Moo_Koh_Chang5.JPG"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 23/7 Moo 3 Ko Chang, Trat </li>
                <li>Tel : +66 3951 0927</li>
                <li>Opening time : Everyday 6.00-18.00 </li>
                <li><span>Fee : Foreigner adult 200 Baht and children 100 Baht</span>
                <br></br>
                <span>Thai citizens 40 Baht for adults and 20 Baht for children</span>
                </li>
                <li>Category : Nature </li>
            </ul>
            

        </div>
        </div>

        
        );
    }
}
 
export default trat1;



