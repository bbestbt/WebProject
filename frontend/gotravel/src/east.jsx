import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class east extends Component {
    
    render() { 
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
        <div id="promo" class="register-header">
            {/* <img src={require("./promo/ticket.png")} width="60" height="60" ></img> */}
            <h1 align="center"> EAST</h1>
        </div>
        
        <div>
            <br></br>
  
                <div class="item">
                <Link to="/chachoengsao"><img src="https://api.tourismthailand.org/upload/live/destination/1-7865.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Chachoengsao</h4>
                </div>
                
                <div class="item">
                <Link to="/chan"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9049.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Chanthaburi</h4>
                </div>
               
               <div class="item">
               <Link to="/chon"> <img src="https://api.tourismthailand.org/upload/live/destination/1124-9071.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Chon Buri</h4>
                </div>

                <div class="item">
                <Link to="/prachin"><img src="https://api.tourismthailand.org/upload/live/destination/4-9018.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Prachin Buri</h4>
                </div>
                
                <div class="item">
                <Link to="/rayong"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9050.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Rayong</h4>
                </div>
               
               <div class="item">
               <Link to="/sakaeo"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9021.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Sa Kaeo</h4>
                </div>

                <div class="item">
               <Link to="/trat"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9051.png.webp"class="promoImg"  ></img></Link>
                    <h4 class="caption">Trat</h4>
                </div>

            </div>
            
            
       

        
    



        </div>
        </div>

   
       
        
        );
    }
}
export default east;
