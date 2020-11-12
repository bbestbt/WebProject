import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class PhraNakhonSiAyutthaya3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Thai Boat Museum</h1>
            <div align="center">
                <img src="https://ttnotes.com/images/thai-boat-museum-ayuthaya.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/c3/e4/24/inside-thai-boat-museum.jpg"  id="touristInfo" ></img>
                <img src="https://go.ayutthaya.go.th/wp-content/uploads/2017/09/ay-bt100f-900x480.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/c3/e3/ef/inside-thai-boat-museum.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Pratu Chai Phra Nakhon Si Ayutthaya Phra Nakhon Si Ayutthaya 13000 Thailand</li>
                <li>Tel : +66 3524 1195, +66 8 1817 0567</li>
                <li>Opening time : 8:00 - 17:00</li>
                <li>Fee : - </li>
                <li>Category : Museums</li>
            </ul> 
        </div>
        </div>
        );
    }
}
 
export default PhraNakhonSiAyutthaya3;
