import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class PathumThani2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Talaad Thai</h1>
            <div align="center">
                <img src="https://4.bp.blogspot.com/_WmFeXwYSUG8/TOvg81OsaPI/AAAAAAAAACI/rHwvcZuKtU8/s1600/IMG_3300.jpg"  id="touristInfo" ></img>
                <img src="https://wuwm.org/uploads/photos/marketphoto_1.png"  id="touristInfo" ></img>
                <img src="https://www.bangkokpost.com/photos_content/large/prefix_1/2543/20543/20543-1447143954hatne8p5s4.jpg"  id="touristInfo" ></img>
                <img src="https://www.meetthinks.com/wp-content/uploads/2020/04/Talaad-Thai-10.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Khlong Nueng khlong Luang Pathum Thani 12120 Thailand</li>
                <li>Tel : +66 2908 4490-9</li>
                <li>Opening time : 1:00 - 24:00 </li>
                <li>Fee : -</li>
                <li>Category : Market </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default PathumThani2;

