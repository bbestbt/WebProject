import React, { Component } from 'react';

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class west extends Component {
    
    render() { 
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
        <div id="promo" class="register-header">
            {/* <img src={require("./promo/ticket.png")} width="60" height="60" ></img> */}
            <h1 align="center"> WEST</h1>
        </div>
        
        <div>
            <br></br>
  
                <div class="item">
                <Link to="/phet"><img src="https://api.tourismthailand.org/upload/live/destination/4-9016.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Phetchaburi</h4>
                </div>
                
                <div class="item">
                <Link to="/prachuap"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9019.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Prachuap Khiri Khan</h4>
                </div>
               
               <div class="item">
               <Link to="/kan"> <img src="https://api.tourismthailand.org/upload/live/destination/1-7867.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Kanchanaburi</h4>
                </div>

                
                <div class="item">
                <Link to="/rat"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9020.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Ratchaburi</h4>
                </div>
               
               <div class="item">
               <Link to="/tak"> <img src="https://api.tourismthailand.org/upload/live/destination/1-7861.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Tak</h4>
                </div>

               

            </div>
            
            
       

        
    



        </div>
        </div>

   
       
        
        );
    }
}
export default west;
