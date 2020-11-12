import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class bueng1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Phu Sing Bueng Kan</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/7b/d5/a4/phu-sing.jpg"  id="touristInfo" ></img>
                <img src="https://api.tourismthailand.org/upload/live/content_article/4-1239.png"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/bc/3c/b2/phu-sing-bueng-kan.jpg"  id="touristInfo" ></img>
                <img src="https://tastethelocal.files.wordpress.com/2018/11/img_2494.jpg?w=739"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Khok Kong,Bueng Kan City 38000 Thailand</li>
                <li>Tel : +66 88 563 8852</li>
                <li>Opening time : All time </li>
                <li>Fee : -</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default bueng1;

