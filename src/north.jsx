import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class north extends Component {
    
    render() { 
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
        <div id="promo" class="register-header">
            {/* <img src={require("./promo/ticket.png")} width="60" height="60" ></img> */}
            <h1 align="center"> NORTH</h1>
        </div>
        
        <div>
            <br></br>
  
                <div class="item">
                <Link to="/mai"><img src="https://api.tourismthailand.org/upload/live/destination/1124-9069.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Chiang Mai</h4>
                </div>
                
                <div class="item">
                <Link to="/rai"> <img src="https://api.tourismthailand.org/upload/live/destination/1-1948.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Chiang Rai</h4>
                </div>
               
               <div class="item">
               <Link to="/pang"> <img src="https://api.tourismthailand.org/upload/live/destination/1-1950.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Lampang</h4>
                </div>

                
                <div class="item">
                <Link to="/phun"> <img src="https://api.tourismthailand.org/upload/live/destination/1-1951.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Lamphun</h4>
                </div>
               
               <div class="item">
               <Link to="/mae"> <img src="https://api.tourismthailand.org/upload/live/destination/1-1952.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption"> Mae Hong Son</h4>
                </div>

                <div class="item">
                <Link to="/nan"> <img src="https://api.tourismthailand.org/upload/live/destination/1-1954.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Nan</h4>
                </div>
               
               <div class="item">
               <Link to="/phayao"> <img src="https://api.tourismthailand.org/upload/live/destination/1-1955.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Phayao</h4>
                </div>

                
                <div class="item">
                <Link to="/phrae"> <img src="https://api.tourismthailand.org/upload/live/destination/1-1959.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Phrae</h4>
                </div>
               
               <div class="item">
               <Link to="/utta"> <img src="https://api.tourismthailand.org/upload/live/destination/1-7863.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Uttaradit</h4>
                </div>

            </div>
            
            
       

        
    



        </div>
        </div>

   
       
        
        );
    }
}
export default north;
