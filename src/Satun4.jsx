import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Satun4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Thung Nui Hot Spring</h1>
            <div align="center">
                <img src="https://lh3.googleusercontent.com/proxy/QEcw3XsiRQLe-w59ZvPWF1GgkcW2b3J3amr44MnB_HTMh17o0rtbkfgPDXbc7bAw9oHOC9hlwMgkZcsZGDMatIelSiQuR2KzoRPhGodWNUqtJJyqaudq6hYEmbqf2bD7QavcQtudWyb8"  id="touristInfo" ></img>
                <img src="https://i.ytimg.com/vi/yl0AzXmGqOw/maxresdefault.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Thung Wa, Satun Thailand</li>
                <li>Tel : +66 7471 2380</li>
                <li>Opening time : 5:00 - 20:00</li>
                <li>Fee : Adult 100 Baht, Children 60 Baht</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Satun4;

