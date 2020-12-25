import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class mai2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Doi Pui</h1>
            <div align="center">
                <img src= "https://static.asiawebdirect.com/m/bangkok/portals/chiangmai-bangkok-com/homepage/attractions/doi-pui/allParagraphs/BucketComponent/ListingContainer/01/image/doi-pui-village.jpg" id="touristInfo" ></img>
                <img src= "https://static.asiawebdirect.com/m/bangkok/portals/chiangmai-bangkok-com/homepage/attractions/doi-pui/allParagraphs/0/BucketList/0/image1/doi-pui-flora.jpg" id="touristInfo" ></img>
                <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2017/04/hmong_triba_-village01.jpg"id="touristInfo" ></img>
                <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2017/04/hmong_triba_-village05.jpg" id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Huai Kaew Road Amphoe Pakkret, Nonthaburi, Doi Suthep 11120 Thailand</li>
                <li>Tel : +66 5321 0244</li>
                <li>Opening time : All time</li>
                <li>Fee : Only apply for visiting waterfalls or camping</li>
                <li>&nbsp;&nbsp; Foreigner - 100 Baht (Children - 50 Baht)</li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default mai2;
