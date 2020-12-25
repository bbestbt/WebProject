import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class south extends Component {
    
    render() { 
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
        <div id="promo" class="register-header">
            {/* <img src={require("./promo/ticket.png")} width="60" height="60" ></img> */}
            <h1 align="center"> SOUTH</h1>
        </div>
        
        <div>
            <br></br>
  
                <div class="item">
                <Link to="/Chumphon"><img src="https://api.tourismthailand.org/upload/live/destination/1-7869.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Chumphon</h4>
                </div>
                
                <div class="item">
                <Link to="/NakhonSiThammarat"> <img src="https://api.tourismthailand.org/upload/live/destination/1-7871.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Nakhon Si Thammarat</h4>
                </div>
               
               <div class="item">
               <Link to="/Narathiwat"> <img src="https://api.tourismthailand.org/upload/live/destination/1-7872.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Narathiwat</h4>
                </div>

                
                <div class="item">
                <Link to="/Pattani"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9031.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Pattani</h4>
                </div>
               
               <div class="item">
               <Link to="/Phatthalung"> <img src="https://api.tourismthailand.org/upload/live/destination/1-4305.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption"> Phatthalung</h4>
                </div>

                <div class="item">
                <Link to="/Songkhla"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9035.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Songkhla</h4>
                </div>
               
               <div class="item">
               <Link to="/SuratThani"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9036.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Surat Thani</h4>
                </div>

                
                <div class="item">
                <Link to="/Yala"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9040.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Yala</h4>
                </div>
               
               <div class="item">
               <Link to="/Krabi"> <img src="https://api.tourismthailand.org/upload/live/destination/1-7870.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Krabi</h4>
                </div>

                <div class="item">
               <Link to="/PhangNga"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9032.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption"> Phang Nga</h4>
                </div>

                <div class="item">
                <Link to="/Phuket"> <img src="https://api.tourismthailand.org/upload/live/destination/1124-9068.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Phuket</h4>
                </div>
               
               <div class="item">
               <Link to="/Ranong"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9033.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Ranong</h4>
                </div>

                
                <div class="item">
                <Link to="/Satun"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9034.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Satun</h4>
                </div>
               
               <div class="item">
               <Link to="/Trang"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9038.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Trang</h4>
                </div>

            </div>
            
            
       

        
    



        </div>
        </div>

   
       
        
        );
    }
}
export default south;
