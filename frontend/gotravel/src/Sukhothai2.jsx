import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class phu2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Somdej Phra Naresuan Maharat Shrine</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-p/11/dd/b5/6b/photo0jpg.jpg"  id="touristInfo" ></img>
                <img src="https://www.thai-tour.com/thai-tour/north/petchbun/images/somdej-phra-naresuan-maharat-shrine/somdej-phra-naresuan-maharat-shrine2.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/nMEB2ZfF5KXrWV0N2dLlIWTP0UlvrxAsjg60ev6qtzrJdLB97Ih1PEaVTLsOgN_TqlQO0HAqiPLavMF8mQd6fhSsLiEshTLPobhVjJYgGebVOmHf-WM"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/p/AF1QipMzQgiYhbOFyS6z9twfe2XyFduetBqwgUiB1H87=s1600-w400"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Soi Naresuan Nong Bua, Nong Bua Lamphu 39000 Thailand</li>
                <li>Tel : +66 64 830 8848</li>
                <li>Opening time : 8:30 - 16:30 </li>
                <li>Fee : -</li>
               
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default phu2;

