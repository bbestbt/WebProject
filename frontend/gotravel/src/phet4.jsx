import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phet4 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Maruekhathaiyawan Palace</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03006443_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03006443_2.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03006443_3.jpeg"  id="touristInfo" ></img>
                <img src="https://static.asiawebdirect.com/m/bangkok/portals/huahin-bangkok-com/homepage/cha-am/maruekathaiyawan/allParagraphs/BucketComponent/ListingContainer/02/image/031.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Phet Kasem Road Cha-am, Phetchaburi </li>
                <li>Tel : +66 3250 8444</li>
                <li>Opening time : Everyday 8.30-16.00 </li>
                <li>Fee : Foreigner 50 Baht</li>
                <li>Category : Royal Palace </li>
            </ul>


        </div>
        </div>

        

       
        
        );
    }
}
 
export default phet4;



