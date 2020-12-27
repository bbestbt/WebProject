import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class kala3 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Pha Sawoei</h1>
            <div align="center">
                <img src="https://patricklepetit.jalbum.net/KALASIN/PHOTOS/SOMDET/Pha%20Sawoei/thumbs/L0729445.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/e4/c5/1d/caption.jpg"  id="touristInfo" ></img>
                <img src="https://www.thaitravelloc.com/picture/pic171-1.jpg"  id="touristInfo" ></img>
                <img src="https://www.thaitravelloc.com/picture/pic171-2.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Pha Sawoei, Kalasin 46150 Thailand</li>
                <li>Tel : +66 4251 3490/1 </li>
                <li>Opening time : All time</li>
                <li>Fee : Foreigner - 100 Baht</li>
                <li>Local - 50 Baht (Children - 20 Baht) </li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default kala3;

