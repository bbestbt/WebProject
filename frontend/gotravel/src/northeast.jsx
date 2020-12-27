import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class northeast extends Component {
    
    render() { 
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="promo" class="register-header">
            {/* <img src={require("./promo/ticket.png")} width="60" height="60" ></img> */}
            <h1 align="center"> NORTHEAST</h1>
        </div>
        
        <div>
            <br></br>
  
                <div class="item">
                <Link to="/amnat"><img src="https://api.tourismthailand.org/upload/live/destination/4-9057.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Amnat Charoen</h4>
                </div>
                
                <div class="item">
                <Link to="/bueng"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9087.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Bueng Kan</h4>
                </div>
               
               <div class="item">
               <Link to="/buri"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9059.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Buri Ram</h4>
                </div>

                
                <div class="item">
                <Link to="/chai"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9060.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Chaiyaphum</h4>
                </div>
               
               <div class="item">
               <Link to="/kala"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9061.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Kalasin</h4>
                </div>

                <div class="item">
                <Link to="/khon"><img src="https://api.tourismthailand.org/upload/live/destination/4-9062.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Khon Kaen</h4>
                </div>
                
                <div class="item">
                <Link to="/loei"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9064.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Loei</h4>
                </div>
               
               <div class="item">
               <Link to="/maha"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9065.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Maha Sarakham</h4>
                </div>

                
                <div class="item">
                <Link to="/mukda"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9066.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Mukdahan</h4>
                </div>
               
               <div class="item">
               <Link to="/phanom"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9067.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Nakhon Phanom</h4>
                </div>

                <div class="item">
                <Link to="/ratcha"><img src="https://api.tourismthailand.org/upload/live/destination/4-9073.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Nakhon Ratchasima</h4>
                </div>
                
                <div class="item">
                <Link to="/phu"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9074.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Nong Bua Lamphu</h4>
                </div>
               
               <div class="item">
               <Link to="/khai"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9075.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Nong Khai</h4>
                </div>

                
                <div class="item">
                <Link to="/et"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9076.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Roi Et</h4>
                </div>
               
               <div class="item">
               <Link to="/sako"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9078.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Sakon Nakhon</h4>
                </div>

                <div class="item">
                <Link to="/si"><img src="https://api.tourismthailand.org/upload/live/destination/4-9080.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Si Sa Ket</h4>
                </div>
                
                <div class="item">
                <Link to="/surin"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9081.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Surin</h4>
                </div>
               
               <div class="item">
               <Link to="/ubon"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9082.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Ubon Ratchathani</h4>
                </div>

                
                <div class="item">
                <Link to="/udon"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9084.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Udon Thani</h4>
                </div>
               
               <div class="item">
               <Link to="/yaso"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9086.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Yasothon</h4>
                </div>
               

            </div>
            
            
       

        
    



        </div>
        </div>

   
       
        
        );
    }
}
export default northeast;
