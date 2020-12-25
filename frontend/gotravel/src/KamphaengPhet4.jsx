import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class KamphaengPhet4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Mae Wong National Park</h1>
            <div align="center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Khong_Klung_creek_in_Mae_Wong_Netional_park.JPG"  id="touristInfo" ></img>
                <img src="https://wildlifethailand.com/kunena/attachment/2961"  id="touristInfo" ></img>
                <img src="https://www.wfft.org/wp-content/uploads/2012/10/Screen-Shot-2016-04-23-at-15.13.09.png"  id="touristInfo" ></img>
                <img src="https://pix10.agoda.net/city/19704/19704-7x3.jpg?s=1920x"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Pang Sila Thong, Kamphaeng Phet Thailand</li>
                <li>Tel : +66 5576 6436</li>
                <li>Opening time : 8:00 - 17:00</li>
                <li>Fee : Adult 200 Baht, Children 100 Baht</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default KamphaengPhet4;

