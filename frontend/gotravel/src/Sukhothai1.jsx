import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class phu1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Tham Erawan Temple</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/d7/b7/fd/wat-tham-erawan.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/d7/b8/00/wat-tham-erawan.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/4b/09/e3/wat-tham-erawan-temple.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/09/76/62/b8/wat-tham-erawan-temple.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Wanthong Nawang Nhong Bua Lamphu 39170</li>
                <li>Tel : +66 87-7740457</li>
                <li>Opening time : 5:00 - 18:00</li>
                <li>Fee : -</li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default phu1;

