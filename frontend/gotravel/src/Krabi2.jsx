import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Krabi2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Krabi Shell Cemetery (Susan Hoi)</h1>
            <div align="center">
                <img src="https://static.asiawebdirect.com/m/phuket/portals/krabi-hotels-com/homepage/seedo/shell-cemetery/pagePropertiesImage/shell-cemetery.jpg"  id="touristInfo" ></img>
                <img src="https://static.asiawebdirect.com/m/phuket/portals/krabi-hotels-com/homepage/seedo/shell-cemetery/allParagraphs/BucketComponent/ListingContainer/01/image/sh600b.jpg"  id="touristInfo" ></img>
                <img src="https://media.sciencephoto.com/c0/33/55/76/c0335576-800px-wm.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/k9sQksdj8bexY07kq6M1Teh86MSJ-XI9_pon6NQaqajhsFRnam_Go4cTi9eu1Z0qOJzJKvfX0NrMqaggfEDlsXgdX71czQ1HUA"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Sai Thai, Krabi 81000 Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : Everyday</li>
                <li>Fee : Adult 200 Baht, Children 100 Baht</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Krabi2;

