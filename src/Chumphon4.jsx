import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Chumphon4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Matsee Mountain</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03007735_1.jpeg"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/siraphol/siraphol1808/siraphol180802539/111340632-view-point-matsee-with-sea-and-mountain-in-chumphon-province-thailand.jpg"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/siraphol/siraphol1806/siraphol180600743/103093835-view-point-matsee-with-sea-and-mountain-in-chumphon-province-thailand.jpg"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/siraphol/siraphol1806/siraphol180601585/103332435-view-point-matsee-with-sea-and-mountain-in-chumphon-province-thailand.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Chumphon, Chumphon Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : -</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Chumphon4;

