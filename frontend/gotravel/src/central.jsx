import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class central extends Component {
    
    render() { 
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="promo" class="register-header">
            {/* <img src={require("./promo/ticket.png")} width="60" height="60" ></img> */}
            <h1 align="center"> CENTRAL</h1>
        </div>
        
        <div>
            <br></br>
  
                <div class="item">
                <Link to="/AngThong"><img src="https://api.tourismthailand.org/upload/live/destination/1-7864.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Ang Thong</h4>
                </div>
                
                <div class="item">
                <Link to="/PhraNakhonSiAyutthaya"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9017.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Phra Nakhon Si Ayutthaya</h4>
                </div>
               
               <div class="item">
               <Link to="/Bangkok"> <img src="https://api.tourismthailand.org/upload/live/destination/1124-9070.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Bangkok</h4>
                </div>

                
                <div class="item">
                <Link to="/Chainat"> <img src="https://api.tourismthailand.org/upload/live/destination/1-7866.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Chai Nat</h4>
                </div>
               
               <div class="item">
               <Link to="/LopBuri"> <img src="https://api.tourismthailand.org/upload/live/destination/1-7868.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption"> Lop Buri</h4>
                </div>

                <div class="item">
                <Link to="/NakhonPathom"> <img src="https://api.tourismthailand.org/upload/live/destination/1-7874.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Nakhon Pathom</h4>
                </div>
               
               <div class="item">
               <Link to="/Nonthaburi"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9014.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Nonthaburi</h4>
                </div>

                
                <div class="item">
                <Link to="/PathumThani"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9015.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Pathum Thani</h4>
                </div>
               
               <div class="item">
               <Link to="/SamutPrakan"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03009127_1.jpeg" class="promoImg"  ></img></Link>
                    <h4 class="caption">Samut Prakan</h4>
                </div>

                <div class="item">
               <Link to="/SamutSakhon"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9023.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Samut Sakhon</h4>
                </div>

                <div class="item">
                <Link to="/SamutSongkhram"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9024.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Samut Songkhram</h4>
                </div>
               
               <div class="item">
               <Link to="/Saraburi"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9025.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Saraburi</h4>
                </div>

                
                <div class="item">
                <Link to="/SingBuri"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9026.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Sing Buri</h4>
                </div>
               
               <div class="item">
               <Link to="/SuphanBuri"> <img src="https://api.tourismthailand.org/upload/live/destination/4-9027.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Suphan Buri</h4>
                </div>

                <div class="item">
                <Link to="/NakhonSawan"> <img src="https://api.tourismthailand.org/upload/live/destination/1-1953.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Nakhon Sawan</h4>
                </div>
               
               <div class="item">
               <Link to="/UthaiThani"> <img src="https://api.tourismthailand.org/upload/live/destination/1-7862.png.webp" class="promoImg"  ></img></Link>
                    <h4 class="caption">Uthai Thani	</h4>
                </div>

            </div>
            
            
       

        
    



        </div>
        </div>

   
       
        
        );
    }
}
export default central;
