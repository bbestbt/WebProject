import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Bangkok1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Pho</h1>
            <div align="center">
                <img src="https://woodychannel.com/wp-content/uploads/2015/05/pho-750x603.jpg"  id="touristInfo" ></img>
                <img src="https://www.emagtravel.com/wp-content/uploads/2011/01/watpho-a1.jpg"  id="touristInfo" ></img>
                <img src="https://2.bp.blogspot.com/-sTCCoE0QeXI/UvfEV2qhSqI/AAAAAAAAAEI/UeoWoQPmWZU/s1600/e21606.jpg"  id="touristInfo" ></img>
                <img src="https://www.emagtravel.com/wp-content/uploads/2011/01/watpho-a4.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Maharat Road, Phra Nakhon, Bangkok 10200, Thailand</li>
                <li>Tel : +66 2 226 0335</li>
                <li>Opening time : 8:00 - 18:30 </li>
                <li>Fee : Adult 100 Baht</li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Bangkok1;

