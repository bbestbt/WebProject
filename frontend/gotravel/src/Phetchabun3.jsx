import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Phetchabun3 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Khao kho</h1>
            <div align="center">
                <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/b21lpf4ystruqqomfvhl/5D4N%20Khao%20Kho%20Private%20Tour%20from%20Bangkok%20By%20Oriental%20Holiday.jpg"  id="touristInfo" ></img>
                <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/bxmrgsexmwofwi3b2ikr/3D2N%20Khao%20Kho%20Private%20Tour%20from%20Bangkok%20By%20Oriental%20Holiday.jpg"  id="touristInfo" ></img>
                <img src="https://cf.bstatic.com/images/hotel/max1024x768/179/179244742.jpg"  id="touristInfo" ></img>
                <img src="https://pix10.agoda.net/hotelImages/4638449/-1/dc5b5905eda0367f6bb87eeb9f471e4c.jpg?s=1024x768"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Khao Kho Khao kho Phetchabun 67270 Thailand</li>
                <li>Tel : +66 5672 8066</li>
                <li>Opening time : 00:00 - 24:00</li>
                <li>Fee : - </li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Phetchabun3;

