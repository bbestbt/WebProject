import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class mukda2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Mukdahan National Park </h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/09/a6/bc/83/mukdahan-national-park.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/gQyQ4IV2QIHbO5JbSH64PhCUuk6CUeTE-7Wuie3IsqqjswVVJ1T9WHlGLyzrkW2rdst43rwCnBHU-qe5oEOwm3DWBVKjRymqOx_eZ9U1RN7AXJJTH6uzm1XwHpmc2j5D2CXLHJYjg4MgY0-5HZq5rFw_Uf2yCg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/04/3f/7b/58/mukdahan-national-park.jpg"  id="touristInfo" ></img>
                <img src="https://www.bangkokpost.com/photos_content/large/prefix_1/1881/13881/13881-12944708906w5blh81x.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 5 bankonsai Nasinual Mueng Mukdahan Mukdahan 49000</li>
                <li>Tel : +66 94 289 2383</li>
                <li>Opening time : 8:00 - 16:30 </li>
                <li>Fee : Foreigner Adult - 200 Baht, Local Adult - 40 Baht</li>
                <li>Children half of adult</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default mukda2;

