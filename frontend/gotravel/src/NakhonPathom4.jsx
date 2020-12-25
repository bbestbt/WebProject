import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class NakhonPathom4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Don Wai Floating Market</h1>
            <div align="center">
                <img src="https://www.expique.com/wp-content/historic_uploads/2016/12/don-wai-03-1024x768.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/VMG0kbyux0h0f5gE7U-J5vVVc_LXTQI0kQpL4iz0uK7A2lFLbxg9_RcBbYCnGXr9RIzdQo79qKVTXnEERm-9V01XJ1qhNV2sLw_fJCu5zRXQlS4D9OxoAS9Tu52lb9cqyw"  id="touristInfo" ></img>
                <img src="https://www.iamwannee.com/wp-content/uploads/2019/09/DoiWai03.jpg"  id="touristInfo" ></img>
                <img src="https://2.bp.blogspot.com/-U_KODFsWtqw/UyWS4vVRdYI/AAAAAAAACmk/cIczS0LRryw/s1600/Donwai+Floating+Market8.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Bang Krathuek Sam Phran Nakhon Pathom 73210 Thailand</li>
                <li>Tel : +66 2482 7213-5, +66 8 4891 6612</li>
                <li>Opening time : 7:00 - 18:00</li>
                <li>Fee : -</li>
                <li>Category : Market</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default NakhonPathom4;

