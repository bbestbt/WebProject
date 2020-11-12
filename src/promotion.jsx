import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class promotion extends Component {
    
    render() { 
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgPromo">
         <br></br>
        <div id="promo" class="register-header">
            <img src={require("./promo/ticket.png")} width="60" height="60" ></img>
            <h1 align="center"> Promotion for this month!</h1>
        </div>
        
        <div>
            <br></br>
  
                <div class="item">
                <Link to="/attractTicket"><img src={require("./promo/farm.jpg")} class="promoImg"  ></img></Link>
                    <h4 class="caption" >ATTRACTION</h4>
                </div>
                
                <div class="item">
                <Link to="/hotelTicket"> <img src={require("./promo/hotel.jpg")} class="promoImg"  ></img></Link>
                    <h4 class="caption" >HOTEL</h4>
                </div>
               
               <div class="item">
               <Link to="/foodTicket"> <img src={require("./promo/restaurant.jpg")} class="promoImg"  ></img></Link>
                    <h4 class="caption">RESTAURANT</h4>
                </div>
            </div>
            
            
       

        
    



        </div>
        </div>

   
       
        
        );
    }
}
export default promotion;
