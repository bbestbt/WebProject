import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class kala1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Phrathat Yakhu</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/ea/79/c2/caption.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/37/a9/58/caption.jpg"  id="touristInfo" ></img>
                <img src="https://www.lovethailand.org/thumb.php?src=images/banner/content/lovethailand_banner_20130102171814.jpg&x=300&y=300"  id="touristInfo" ></img>
                <img src="https://static.bangkokpost.com/media/content/20130418/492512.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Khong Chai, Kalasin</li>
                <li>Tel : -</li>
                <li>Opening time : 8:00 - 16:30 </li>
                <li>Fee : -</li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default kala1;

