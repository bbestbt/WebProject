import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class yaso2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Phra That Kong Khao Noi</h1>
            <div align="center">
                <img src="https://www.thailandguidebook.com/wp-content/uploads/2012/01/IMG_6735.jpg"  id="touristInfo" ></img>
                <img src="https://www.temple-thai.com/wp-content/uploads/2018/01/phrathat-kong-khao-noi-5.jpg"  id="touristInfo" ></img>
                <img src="https://temple-thai.com/wp-content/uploads/2018/01/phrathat-kong-khao-noi-2.jpg"  id="touristInfo" ></img>
                <img src="https://thumbs.dreamstime.com/b/phra-kong-khao-noi-ancient-stupa-chedi-structure-enshrines-holy-buddhist-relics-built-th-century-126433406.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Chaeng Sanit Rd., Tat Thong, Muang Yasothon, Yasothon 35000 Thailand</li>
                <li>Tel : +66 4571 5523</li>
                <li>Opening time : 8:30 - 17:30 </li>
                <li>Fee : -</li>
               
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default yaso2;

