import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';
import ticket from "./promo/ticket.png"
import farm from "./promo/farm.jpg"
import hotel from "./promo/hotel.jpg"
import restaurant from "./promo/restaurant.jpg"

class promotion extends Component {
    
    render() { 
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgPromo">
         <br></br>
        <div id="promo" class="register-header">
            <img src={ticket} width="60" height="60" ></img>
            <h1 align="center"> Promotion for this month!</h1>
        </div>
        
        <div>
            <br></br>
  
                <div class="item">
                <Link to="/attractTicket"><img src={farm} class="promoImg"  ></img></Link>
                    <h4 class="caption" >ATTRACTION</h4>
                </div>
                
                <div class="item">
                <Link to="/hotelTicket"> <img src={hotel} class="promoImg"  ></img></Link>
                    <h4 class="caption" >HOTEL</h4>
                </div>
               
               <div class="item">
               <Link to="/foodTicket"> <img src={restaurant} class="promoImg"  ></img></Link>
                    <h4 class="caption">RESTAURANT</h4>
                </div>
            </div>
            
            
       

        
    



        </div>
        </div>

   
       
        
        );
    }
}
export default promotion;
