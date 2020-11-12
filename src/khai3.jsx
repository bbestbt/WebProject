import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class khai3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Phrathat Bang Phuan
</h1>
            <div align="center">
                <img src="https://ttnotes.com/images/wat-phra-that-bang-phuan-nong-khai-province-6.jpg"  id="touristInfo" ></img>
                <img src="https://patricklepetit.jalbum.net/NONG%20KHAI/PHOTOS/MUEANG%20NONG%20KHAI/Wat%20Phra%20That%20Bang%20Phuan/I1230025_resize.jpg"  id="touristInfo" ></img>
                <img src="https://ed.edtfiles-media.com/static-cache/resize-cache/790x528/ud/gal/dcp/21/62107/22744_7844ad977ef578c2823b82e8e778674a.jpg"  id="touristInfo" ></img>
                <img src="https://www.thaiworldview.com/photo/jpg/Thailand/Buddhism/Dsc20050213-002.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Tha Bo Tha Bo Nong Khai</li>
                <li>Tel : +66 42-990-315</li>
                <li>Opening time : 8:00 - 17:00</li>
                <li>Fee : - </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default khai3;

