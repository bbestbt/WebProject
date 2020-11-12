import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class chai2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Tatton Waterfall</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/91/c6/ab/t6a1269-largejpg.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/91/c6/a9/t6a1283-largejpg.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/06/c8/21/waterfall.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/18/07/35/tat-ton-waterfall.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Tatton National park, Chaiyaphum Thailand</li>
                <li>Tel : +66 44 853 293</li>
                <li>Opening time : 8:00 - 18:00 </li>
                <li>Fee : Foreigner - 200 Baht, Local - 40 Baht</li>
                <li>Children - half of adult price</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default chai2;

