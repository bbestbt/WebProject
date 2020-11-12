import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class trat2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Namtok Than Mayom</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03001859_1.jpeg"  id="touristInfo" ></img>
                <img src="https://ttnotes.com/images/nam-tok-than-mayom-ko-chang.jpg"  id="touristInfo" ></img>
                <img src="https://patricklepetit.jalbum.net/TRAT/PHOTOS/KOH%20CHANG/Namtok%20Than%20Mayom/H0722171_resize.jpg"  id="touristInfo" ></img>
                <img src="https://iamkohchang.com/wp-content/gallery/than-mayom/than-mayom-waterfall-11.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ko Chang, Trat </li>
                <li>Tel : +66 3959 7259</li>
                <li>Opening time : Everyday 9.00-16.30 </li>
                <li>Fee : Foreigner adult 200 Baht and children 100 Baht </li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>

        
        );
    }
}
 
export default trat2;

