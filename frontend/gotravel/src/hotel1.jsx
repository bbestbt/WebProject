import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";


class hotel1 extends Component {
    
    render() { 
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
        
        <div align="center" >
            <br></br>
                
                    <div  id="hotelInfo">
                        <img src={require("./promo/h1.jpg")} class="promoImg"  ></img>
                        <h4 class="caption" >El Barrio Lanna Hotel</h4>
                        <p>Address : 41/5 Prapokklao Lane 7, Tambon Phra Sing, Chiang Mai 50200 Thailand</p>
                        <p>Tel : 053 271 465</p>
                        <p>Website : http://www.elbarriolanna.com </p>
                    </div>
                    
                    <div class="discount">
                    <img align="left" src={require("./promo/tag.png")} width="60" height="60" ></img>
                    <div class="price">
                        <br></br>
                        <br></br>
                        <h5 align="center" class="oldPrice">THB 3738</h5>
                        <h3 align="center">THB 1546</h3>
                        <br></br>
                        <a class="ticket" href="#"> Buy ticket </a>
                    </div>
                    </div>
                
                <div id="placePromo">
                    <div align="center" >
                        <img src={require("./promo/h11.jpg")} class="promoImg"  ></img>
                        <img src={require("./promo/h12.jpg")} class="promoImg"  ></img>
                        <img src={require("./promo/h13.jpg")} class="promoImg"  ></img>
                        <img src={require("./promo/h14.jpg")} class="promoImg"  ></img>
                        <img src="https://cf.bstatic.com/images/hotel/max1024x768/238/238312791.jpg" class="promoImg" ></img>
                        
                    </div>

        </div>
         
        </div>
        </div>

   
       
        
        );
    }
}
export default hotel1;
