import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class mae3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Nan Noble House</h1>
            <div align="center">
                <img src="https://lh3.googleusercontent.com/proxy/q0Q9BjC6vh3tjBig-WGmzBfPNRT59qFot533quFM-qthVSzgNDzSe0w5oo2XIaT0_cELom7Xr2d0aqJTwS-UGh1d45JvDqUO-UsIDwttXmXo2K0MiTXmDpfXvFwyfvjbgTORxXLGSBJDqIFmr0AX5O2wj3RQDi7HE9KjErcMxhxb"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/UhMqNP4PWYjBOxaqCBAzwAufp66DLQRgiP_8iVAfP1aaYoaTkBI4E8koMiKD-2QhrwYkm_4BTro7Jyx17k3pHdQzPE9eyYW-RxyO1QZv_wT6-enbDNuiI-oI0IIwydTv"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/03/e8/e8/a6/nan-noble-house.jpg"  id="touristInfo" ></img>
                <img src="https://pix10.agoda.net/hotelImages/295/295298/295298_14040520150018979442.jpg?s=1024x768"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 8 Sumon Thewarat 2 Nai Wiang, Nan Thailand</li>
                <li>Tel : +66 81 796 9029 </li>
                <li>Opening time : All time</li>
                <li>Fee : 20 Baht </li>
                <li>Category : Landmark</li>
            </ul> 
        </div>
        </div>
        );
    }
}
 
export default mae3;
