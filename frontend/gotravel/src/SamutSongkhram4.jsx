import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phanom4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Phra That Tha Uthen</h1>
            <div align="center">
                <img src="https://lh3.googleusercontent.com/proxy/mc62-yymsURLizD16JZwV3TVcJdB0prLCzD1S-sUoAV6DyB3PrM3XceN4UdJxp5SU0zwPEwGwFrJOmrFkhaitCIWc8E"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Phra_That_Tha_Uthen_%282%29.jpg"  id="touristInfo" ></img>
                <img src="https://i.pinimg.com/originals/cc/b4/9f/ccb49f109da04b2550de2884fc2b568b.jpg"  id="touristInfo" ></img>
                <img src="https://videohive.img.customer.envatousercontent.com/files/f44c7fd8-0714-4b3e-84c9-1b5ebe0d3ec0/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=c2eb05b26338e32b3553840c44f1eb16"  id="touristInfo" ></img>  
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 87 Moo 5, Si Mueang Rd, Tha Uthen 48120 Thailand</li>
                <li>Tel : +66 42 581 484</li>
                <li>Opening time : 8:00 - 17:00</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default phanom4;

