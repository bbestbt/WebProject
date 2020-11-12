import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class NakhonSiThammarat3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Krung Ching Sea Of Fog</h1>
            <div align="center">
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171129ee0c4e1eccd8f1ba9ddc588040ec96fa114628.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171129b7b1bf95365a97013b252f4de815113e114628.jpg"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171129e6cc925249debfdf5e33a20f9a72801a114628.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013020_1.jpeg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 1 Moo 1 Nopphitam, Nakhon Si Thammarat Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 5:00 - 21:00</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default NakhonSiThammarat3;

