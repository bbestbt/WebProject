import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Chainat2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Chao Phraya Dam</h1>
            <div align="center">
                <img src="https://static.bangkokpost.com/media/content/20160922/1995828.jpg"  id="touristInfo" ></img>
                <img src="https://static.bangkokpost.com/media/content/20150721/c1_629692_150721153909.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012143_1.jpeg"  id="touristInfo" ></img>
                <img src="https://3.bp.blogspot.com/-UfG8QgGEYEo/VaU0LZImQuI/AAAAAAAAACQ/7JZSjosr9pA/s1600/waii-2015-01217.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Sapphaya, Chainat Thailand</li>
                <li>Tel : +66 5640 5266</li>
                <li>Opening time : 8:00 - 17:00 </li>
                <li>Fee : -</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Chainat2;

