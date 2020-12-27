import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

class hotel6 extends Component {
    
    render() { 
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
        
        <div align="center" >
            <br></br>
                
                    <div  id="hotelInfo">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/0e/86/48/a8/bluesotel-krabi-ao-nang.jpg" class="promoImg"  ></img>
                        <h4 class="caption" >BlueSotel Krabi</h4>
                        <p>Address : 778 Moo 2, Ao Nang, Krabi Town 81180 Thailand</p>
                        <p>Tel : 075 641 111 </p>
                        <p>Website : https://www.bluesotelkrabi.com/ </p>
                    </div>
                    
                    <div class="discount">
                    <img align="left" src={require("./promo/tag.png")} width="60" height="60" ></img>
                    <div class="price">
                        <br></br>
                        <br></br>
                        <h5 align="center" class="oldPrice">THB 1643</h5>
                        <h3 align="center">THB 1190</h3>
                        <br></br>
                        <a class="ticket" href="#"> Buy ticket </a>
                    </div>
                    </div>
                
                <div id="placePromo">
                    <div align="center" >
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/14/74/cc/8a/bluesotel-krabi.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/14/74/cb/d2/bluesotel-krabi.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/14/74/cb/6d/bluesotel-krabi.jpg"class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/14/74/cc/24/bluesotel-krabi.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/15/b2/e5/ad/bluesotel-krabi.jpg" class="promoImg" ></img>
                        
                    </div>

        </div>
         
        </div>
        </div>

   
       
        
        );
    }
}
export default hotel6;
