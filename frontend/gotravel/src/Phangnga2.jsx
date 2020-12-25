import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Phangnga2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Ton Pariwat Wildlife Sanctuary</h1>
            <div align="center">
                <img src="https://sealandcamp.com/uploads/news/2/news1201012711.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/4nPq_UnP3qLONonQq-go-DWOpuYBnmMKvTfuzC_rpnw7t-XZwSmzcNJCfuHyGyWEPJ9WHLCV2CkjmysN8EjeHdYw-wB-ye7a-e_mOgzc7ZrJlVvEEw0ntiqUu4WyndC7SB8I3v3flG6ukWquve6u_HMDTL-u23a-HH3ItG6A2rQZ9srnxh4"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Phang-nga, Phang Nga Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : -</li>
                <li>Fee : -</li>
               
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Phangnga2;

