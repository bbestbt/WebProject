import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Ranong4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Lam Nam Kra Buri National Park</h1>
            <div align="center">
                <img src="https://lh3.googleusercontent.com/proxy/boMPTQdnIoHKonFBn__KhRulmQfvMXqwhEO6hbZuSB96EePyfUo8J9ksuQ3DYgDePhqzer0N3erd7UthxWB6yFa970D3GRuFR4bHZj1cQa5mXaN3cZ2Ptg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/iXN3dkmXk1YAsq5Gyxl8Vk167Wn5l8RettbCAZg5ZEAImOJcigL32MVH42cxd0J8yRiQ80Je8tBLBRYmFdjppA"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/gajokfilm/gajokfilm1611/gajokfilm161100008/64979390-pun-ya-ban-waterfall-at-lamnam-kra-buri-national-park-in-ranong-thailand.jpg"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/gajokfilm/gajokfilm1611/gajokfilm161100009/64979391-pun-ya-ban-waterfall-at-lamnam-kra-buri-national-park-in-ranong-thailand.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Ranong, Ranong Thailand</li>
                <li>Tel : +66 7798 9817</li>
                <li>Opening time : -</li>
                <li>Fee : Adult 100 Baht, Children 50 Baht</li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Ranong4;
