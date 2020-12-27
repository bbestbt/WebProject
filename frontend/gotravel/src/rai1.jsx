import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class rai1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Doi Inthanon</h1>
            <div align="center">
                <img src="https://www.renown-travel.com/images/white-temple-chiang-rai-l.jpg"  id="touristInfo" ></img>
                <img src="https://www.slate.com/content/dam/slate/blogs/atlas_obscura/2014/07/22/wat_rong_khun_or_the_white_temple_in_chiang_rai_thailand/5520666023_b1eee146cc_o.jpg.CROP.promo-xlarge.jpg"  id="touristInfo" ></img>
                <img src="https://ecophiles.com/wp-content/uploads/2017/12/Wat-Rong-Khun-Carlos-Adampol-Galindo-via-Flickr-759x500.jpg"  id="touristInfo" ></img>
                <img src="https://i.pinimg.com/originals/b3/92/f5/b392f52d793550c229c837002d468ebb.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Lahaul-Spiti Pa O Don Chai Subdistrict, Chiang Rai 57000 Thailand</li>
                <li>Tel : +66 53 673 579 </li>
                <li>Opening time :  8:00 A.M. – 6:00 P.M. </li>
                <li><span>Fee : Foreigners - 50 Baht</span></li>
                <li>Category : Temple, Art</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default rai1;
