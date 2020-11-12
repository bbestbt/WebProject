import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";


class hotel2 extends Component {
    
    render() { 
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
        
        <div align="center" >
            <br></br>
                
                    <div  id="hotelInfo">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/11/26/fc/ad/rainforest-boutique.jpg" class="promoImg"  ></img>
                        <h4 class="caption" >Rainforest Chiangmai Hotel</h4>
                        <p>Address : 23/1 Charoenmuang Rd. Soi 5 T.Tasala A.Muang, Chiang Mai 50000 Thailand</p>
                        <p>Tel : 086 429 5578 </p>
                        <p>Website : http://www.chiangmairainforest.com </p>
                    </div>
                    
                    <div class="discount">
                    <img align="left" src={require("./promo/tag.png")} width="60" height="60" ></img>
                    <div class="price">
                        <br></br>
                        <br></br>
                        <h5 align="center" class="oldPrice">THB 1029</h5>
                        <h3 align="center">THB 727</h3>
                        <br></br>
                        <a class="ticket" href="#"> Buy ticket </a>
                    </div>
                    </div>
                
                <div id="placePromo">
                    <div align="center" >
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/11/26/f2/14/rainforest-boutique.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/11/26/f5/83/rainforest-luxury-room.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/11/27/03/4e/standard-room-twin-bed.jpg"class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/11/27/08/49/hotel-lobby.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/13/30/6f/33/restaurant.jpg" class="promoImg" ></img>
                        
                    </div>

        </div>
         
        </div>
        </div>

   
       
        
        );
    }
}
export default hotel2;
