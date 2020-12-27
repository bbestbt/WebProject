import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class loei3 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Neramit Wipattasana</h1>
            <div align="center">
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/201801157058f737af0ae9790e088a461cc7b1a1172834.jpg"  id="touristInfo" ></img>
                <img src="https://www.chillpainai.com/src/wewakeup/img_travel/746/1444798201-WatNeramit_42.jpg"  id="touristInfo" ></img>
                <img src="https://media.istockphoto.com/photos/buddha-statue-in-wat-neramit-wipatsana-at-dan-sai-loei-picture-id488111266"  id="touristInfo" ></img>
                <img src="https://temple-thai.com/wp-content/uploads/2020/07/wat-neramit-wipatsana-1.jpg"  id="touristInfo" ></img>     

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Dan Sai Dan Sai Loei 42120</li>
                <li>Tel : +66 42-891226 </li>
                <li>Opening time : 6:00 - 18:00</li>
                <li>Fee : - </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default loei3;

