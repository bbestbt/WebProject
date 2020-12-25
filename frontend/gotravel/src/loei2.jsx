import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class loei2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Phu Thog </h1>
            <div align="center">
                <img src="https://ed.edtfiles-media.com/ud/book/content/1/150/449824/co-850x567.JPG"  id="touristInfo" ></img>
                <img src="https://th.readme.me/f/17805/5b44bae55899ed1053422fb3.jpg"  id="touristInfo" ></img>
                <img src="https://f.ptcdn.info/942/058/000/pctbhij52FWJPVbxCa1-o.jpg"  id="touristInfo" ></img>
                <img src="https://i-san.tourismthailand.org/wp-content/uploads/2018/12/366682245f338aacc852ff350d1a968e703215a56-713x475.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Chiang Khan 42100 Thailand</li>
                <li>Tel : +66 42821664</li>
                <li>Opening time : 5:00 - 18:00 </li>
                <li>Fee : -</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default loei2;

