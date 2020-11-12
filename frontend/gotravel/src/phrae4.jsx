import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phayao4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Meajok Hot Springs</h1>
            <div align="center">
                <img src="https://ak.picdn.net/shutterstock/videos/1006617916/thumb/1.jpg"  id="touristInfo" ></img>
                <img src="https://mychiangmaitour.com/wp-content/images/phrae/mae_chok_hot_spring004.jpg"  id="touristInfo" ></img>
                <img src="https://mychiangmaitour.com/wp-content/uploads/2018/10/mae_chok_hot_spring007.jpg"  id="touristInfo" ></img>
                <img src="https://www.lovethailand.org/thumb.php?src=images/banner/content/lovethailand_banner_20121807105645.jpg&x=300&y=300"  id="touristInfo" ></img>             
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Highway 1023 Mae Pak, Wang Chin 54150 Thailand</li>
                <li>Tel : +66 54 064 252 </li>
                <li>Opening time : 8 am. - 5 pm.</li>
                <li>Fee : 30 Baht</li>
                <li>Category : Hot spring</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default phayao4;
