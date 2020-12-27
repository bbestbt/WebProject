import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class KamphaengPhet3 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Klong Lan Waterfall</h1>
            <div align="center">
                <img src="https://images.world-of-waterfalls.com/Khlong_Lan_021_01042009.jpg"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/itman47/itman471508/itman47150800418/44492156-khlong-lan-waterfall-in-national-park-kamphaeng-phet-thailand-.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandtourismdirectory.go.th/en/file/get/file/20171023b941e8127a782b30b9159e3e9b4df835010825.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20180106b97e4a561188e9ee33f92baf33dc0a4d124053.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Khlong Lan Phatthana Khlong Lan Kamphaeng Phet 62180 Thailand</li>
                <li>Tel : +66 88 407 9915 </li>
                <li>Opening time : 8:00 - 18:00</li>
                <li>Fee : 40 Baht </li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default KamphaengPhet3;

