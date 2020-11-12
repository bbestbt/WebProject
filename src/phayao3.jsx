import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phayao3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Kwan Phayao</h1>
            <div align="center">
                <img src="https://mychiangmaitour.com/wp-content/uploads/2019/05/Kwan-Phayao14.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/4d/5f/b1/dragon.jpg"  id="touristInfo" ></img>
                <img src="https://img.freepik.com/free-photo/beautiful-view-kwan-phayao-thailand-with-soft-focus_41050-2694.jpg?size=626&ext=jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/Phro83EcI3zrHnRDRKGw5QO0nNeMXamyj1RFohhXRRv5wJKFMhdSfi_tE8_bYsvnRyeD7BOrokQrA2_ZACtzluutuFGzjfH_CrXTsThg9TdUg1AVT3ZzCmFC"  id="touristInfo" ></img>         
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Mueang Phayao, Phayao</li>
                <li>Tel : - </li>
                <li>Opening time : 01:00-24:00</li>
                <li><span>Fee : -</span></li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default phayao3;
