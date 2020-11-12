import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class attractTicket extends Component {
    
    render() { 
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgAttract">
         <br></br>
        <div id="attract" class="register-header">
            <img src={require("./promo/attract.png")} width="60" height="60" ></img>
            <h1 align="center"> Attraction tickets</h1>
        </div>
        
        <div id="placePromo">
            <br></br>
            <h3 align="center">SAFARI WORLD</h3>
            <div align="center" >
                <img src={require("./promo/P1.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket </a>
                <img src={require("./promo/P2.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket </a>
                <img src={require("./promo/P3.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
            </div>
            
        </div>
    
        <div id="placePromo">
            <br></br>
            <h3 align="center">VANA NAVA WATER JUNGLE</h3>
            <div align="center">
                <img src={require("./promo/P5.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={require("./promo/P6.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={require("./promo/P7.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={require("./promo/P8.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={require("./promo/P9.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>

            </div>
        </div>

        <div id="placePromo">
            <br></br>
            <h3 align="center">PATTAYA SHEEP FARM</h3>
            <div align="center">
                <img src={require("./promo/p10.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={require("./promo/p11.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={require("./promo/p12.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={require("./promo/p13.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
    

            </div>
        </div>

        <div id="placePromo">
            <br></br>
            <h3 align="center">PATTAYA DOLPHINARIUM</h3>
            <div align="center">
                <img src={require("./promo/p14.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={require("./promo/p15.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={require("./promo/p16.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={require("./promo/p17.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={require("./promo/p18.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={require("./promo/p19.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={require("./promo/p20.png")} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>

            </div>
        </div>


        </div>
        </div>

   
       
        
        );
    }
}
export default attractTicket;
