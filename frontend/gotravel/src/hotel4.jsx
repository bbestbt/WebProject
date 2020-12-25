import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

class hotel4 extends Component {
    
    render() { 
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
        
        <div align="center" >
            <br></br>
                
                    <div  id="hotelInfo">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/0e/e5/0d/c3/d-varee-diva-central.jpg" class="promoImg"  ></img>
                        <h4 class="caption" >D Varee Diva Central Rayong</h4>
                        <p>Address : 590 Sukhumvit Rd Noen Phra, Rayong 21000 Thailand</p>
                        <p>Tel : 038 997 333 </p>
                        <p>Website : http://ddcr.dvaree.com/ </p>
                    </div>
                    
                    <div class="discount">
                    <img align="left" src={require("./promo/tag.png")} width="60" height="60" ></img>
                    <div class="price">
                        <br></br>
                        <br></br>
                        <h5 align="center" class="oldPrice">THB 1504</h5>
                        <h3 align="center">THB 1155</h3>
                        <br></br>
                        <a class="ticket" href="#"> Buy ticket </a>
                    </div>
                    </div>
                
                <div id="placePromo">
                    <div align="center" >
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/0e/e5/0f/77/lobby.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/0b/c6/a6/77/bathroom.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/14/65/e8/7e/d-varee-diva-central.jpg"class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/14/cf/6f/3f/dsc05879-largejpg.jpg" class="promoImg"  ></img>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-o/11/6b/4e/a9/img-20171128-165218-largejpg.jpg" class="promoImg" ></img>
                        
                    </div>

        </div>
         
        </div>
        </div>

   
       
        
        );
    }
}
export default hotel4;
