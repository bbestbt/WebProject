import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class si2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Pa Si Mongkhon Rattanaram</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/19/64/2b/c2/caption.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-p/1a/d7/13/ac/caption.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/19/64/2a/98/caption.jpg"  id="touristInfo" ></img>
                <img src="https://reviewesan.com/wp-content/uploads/2019/04/56899662_2003301609781910_3665863490326757376_o.jpg"  id="touristInfo" ></img>
 
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Khok Chan Uthumphon Phisai Si Sa Ket 33120</li>
                <li>Tel : +66 8 1153 7351</li>
                <li>Opening time : 6:00 - 18:00 </li>
                <li>Fee : -</li>
               
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default si2;

