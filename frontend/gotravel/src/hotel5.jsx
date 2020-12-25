import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";


class hotel5 extends Component {
    
    render() { 
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
        
        <div align="center" >
            <br></br>
                
                    <div  id="hotelInfo">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/15/d8/ea/7a/natee-the-riverfront.jpg" class="promoImg"  ></img>
                        <h4 class="caption" >Natee The Riverfront Hotel</h4>
                        <p>Address : 77/77 River Kwai Road, T. Thamakham, Kanchanaburi 71000 Thailand</p>
                        <p>Tel :034 518 777 </p>
                        <p>Website : https://www.nateetheriverfront.com/ </p>
                    </div>
                    
                    <div class="discount">
                    <img align="left" src={require("./promo/tag.png")} width="60" height="60" ></img>
                    <div class="price">
                        <br></br>
                        <br></br>
                        <h5 align="center" class="oldPrice">THB 1963</h5>
                        <h3 align="center">THB 1660</h3>
                        <br></br>
                        <a class="ticket" href="#"> Buy ticket </a>
                    </div>
                    </div>
                
                <div id="placePromo">
                    <div align="center" >
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/16/65/d3/42/hotel-front.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/15/d8/e5/7f/thai-contemporary-lobby.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/15/d8/e4/dd/outdoor-swimming-pool.jpg"class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/15/d8/4e/c3/jacuzzi-riverfront-pool.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/15/d8/e6/0b/the-railway-restaurant.jpg" class="promoImg" ></img>
                        
                    </div>

        </div>
         
        </div>
        </div>

   
       
        
        );
    }
}
export default hotel5;
