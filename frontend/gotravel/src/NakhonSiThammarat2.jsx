import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class NakhonSiThammarat2 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Wat Nantaram</h1>
            <div align="center">
                <img src="https://www.thegtrider.com/cms/wp-content/gallery/phayao/wat-nantaram/wat-nantaram-chiangkham-1.jpg"  id="touristInfo" ></img>
                <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2019/07/nantaram-temple01.jpg"  id="touristInfo" ></img>
                <img src="https://patricklepetit.jalbum.net/PHAYAO/PHOTOS/CHIANG%20KHAM/Wat%20Nantaram/K0204050_resize.jpg"  id="touristInfo" ></img>
                <img src="https://www.thaifoodandtravel.com/blog/wp-content/uploads/2014/05/wat-nantaram-05.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Pak Phanang, Nakhon Si Thammarat Thailand</li>
                <li>Tel : +66 7551 7693</li>
                <li>Opening time : -</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default NakhonSiThammarat2;