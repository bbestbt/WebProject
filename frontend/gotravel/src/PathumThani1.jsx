import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class PathumThani1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Dream World</h1>
            <div align="center">
                <img src="https://d15kbsmiqz0zlr.cloudfront.net/wp-content/uploads/2019/08/Dream-World-featured-1200x900.jpg"  id="touristInfo" ></img>
                <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/0e3096da-%E6%A2%A6%E5%B9%BB%E4%B8%96%E7%95%8C%E4%B8%BB%E9%A2%98%E5%85%AC%E5%9B%AD---Klook%E5%AE%A2%E8%B7%AF/DreamWorld.jpg"  id="touristInfo" ></img>
                <img src="https://ik.imagekit.io/tvlk/xpe-asset/dsIfD0QxFcgaDmB6sQchobk5CmBu9PzsWhwFXGFxJ179jzSxIGG5kZNhhHY-p7nw/xxt/experience/image/Dream%20World_Photo%20Spots%2012.jpg-1280x720-FIT-75260f467eb187e04e26322ad8123ec5.jpeg?_src=imagekit&tr=c-at_max,h-500,q-60,w-612"  id="touristInfo" ></img>
                <img src="https://af-cdn-v-uploads.azureedge.net/uploads/activityphoto-bef58f26-ee16-4481-9345-1829e8dcf86e.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Bueng Yitho Thanyaburi Pathum Thani 12130 Thailand</li>
                <li>Tel : +66 2577 8666</li>
                <li>Opening time : 10:00 - 19:00 </li>
                <li>Fee : Adult - 850 Baht, Children - 400 Baht</li>
                <li>Category : Amusement Park </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default PathumThani1;

