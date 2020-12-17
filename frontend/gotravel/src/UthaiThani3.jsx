import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class ratcha3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Lamtakhong Dam</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/d9/aa/7a/view-point-of-lamtakong.jpg"  id="touristInfo" ></img>
                <img src="https://ak.jogurucdn.com/media/image/p25/place-2017-10-23-11-155251afe5527bc40d618cfb2bc343df.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/e8/70/8b/caption.jpg"  id="touristInfo" ></img>
                <img src="https://www.hlimg.com/images/things2do/738X538/4_1515061822t.jpg"  id="touristInfo" ></img>  
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Lamtakhong dam, Nakhon Ratchasima Thailand</li>
                <li>Tel : +66 4432 3144 </li>
                <li>Opening time : All time</li>
                <li>Fee : - </li>
                <li>Category : Landmark </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default ratcha3;

