import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Krabi4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Monkey Trail</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0c/46/a0/da/monkey-trail.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0c/46/9e/95/monkey-trail.jpg"  id="touristInfo" ></img>
                <img src="https://ak.jogurucdn.com/media/image/p25/place-2016-10-3-6-5530590ddc7dcfc2345d11d554b1e1cb.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/1c/b8/7b/trail.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ao Nang, Krabi Town Thailand</li>
                <li>Tel : +66 75 637 789</li>
                <li>Opening time : Everyday</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Krabi4;

