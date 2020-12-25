import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class sako1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Tham Pha Daen</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/08/0a/93/83/caption.jpg"  id="touristInfo" ></img>
                <img src="https://thailandlife.info/wp-content/uploads/2019/02/Golden-Rock-at-Wat-Tham-Pha-Daen.jpg"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/chanchaiduangdoosan/chanchaiduangdoosan1910/chanchaiduangdoosan191000034/133615315-buddha-statue-of-wat-tham-pha-daen-temple-famous-temple-of-sakon-nakhon-thailand.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/09/0b/a0/66/caption.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Highway 2339 , Moo 9, Sakon Nakhon 47000 Thailand</li>
                <li>Tel : +66 56 481 660</li>
                <li>Opening time : 6:30 - 18:00</li>
                <li>Fee : -</li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default sako1;

