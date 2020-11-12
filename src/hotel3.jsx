import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";


class hotel3 extends Component {
    
    render() { 
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
        
        <div align="center" >
            <br></br>
                
                    <div  id="hotelInfo">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/18/12/21/10/panan-krabi-resort.jpg" class="promoImg"  ></img>
                        <h4 class="caption" >Panan Krabi Resort</h4>
                        <p>Address : 945 Moo 2, Ao Nang, Krabi Town 81180 Thailand</p>
                        <p>Tel : 075 817 788 </p>
                        <p>Website : https://www.panankrabiresort.com </p>
                    </div>
                    
                    <div class="discount">
                    <img align="left" src={require("./promo/tag.png")} width="60" height="60" ></img>
                    <div class="price">
                        <br></br>
                        <br></br>
                        <h5 align="center" class="oldPrice">THB 2005</h5>
                        <h3 align="center">THB 1528</h3>
                        <br></br>
                        <a class="ticket" href="#"> Buy ticket </a>
                    </div>
                    </div>
                
                <div id="placePromo">
                    <div align="center" >
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/18/12/13/ff/panan-krabi-resort-roof.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/18/12/21/22/panan-krabi-resort.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/18/12/12/f6/panan-krabi-resort.jpg"class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/18/12/20/fa/panan-krabi-resort.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/18/12/15/f9/kids-pool.jpg" class="promoImg" ></img>
                        
                    </div>

        </div>
         
        </div>
        </div>

   
       
        
        );
    }
}
export default hotel3;
