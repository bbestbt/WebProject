import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class rayong1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Laem Mae Phim</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005264_1.jpeg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/62/59/71/mae-phim-beach.jpg"  id="touristInfo" ></img>
                <img src="https://maephimproperty.com/sites/all/themes/mpp/images/escape/escape-above-1-gr.jpg"  id="touristInfo" ></img>
                <img src="https://www.iarur3yota2020.com/wp-content/uploads/2019/11/Laem-Mae-Phim-Beach.jpg"  id="touristInfo" ></img>
               
               
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Klaeng, Rayong</li>
                <li>Tel : +66 3863 8023</li>
                <li>Opening time : Everyday 8.30-16.30</li>
                <li>Fee : - Baht </li>
                <li>Category : Beaches </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default rayong1;

