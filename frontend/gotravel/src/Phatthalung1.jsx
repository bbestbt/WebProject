import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Phatthalung1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Thale Noi</h1>
            <div align="center">
                <img src="https://fanclubthailand.co.uk/wp-content/uploads/2020/01/Phatthalung_Thale_Noi_1600.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/TR_7pwFvDp9QuG02mJJSa5MD4WzyIfFj07YRa_PYQ3utY74O-fjmEh2kEmCY8mvfkLT4oMxIIwgUZLSmBazWHqSSO-wqP4IAAkUfr5wEUoz3SF8YjcSOzC2bib3aPGaP5Ky9reaxN00KGsX8z9skU_o"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/zH50O7WSrcS0RKmnQ6gobJftTh9kLIuN7PPmOcw2wsKzeLrlsV5-jdpcHxR0C8yfAXI5UsUjoz5BhH6VSQrRU0g9Ql1mKiTN4UZkNiHfiLo9V30e09bBTsY"  id="touristInfo" ></img>
                <img src="https://3.bp.blogspot.com/-1Ro20cCPQeE/VxYaXC00jwI/AAAAAAAAADM/esyNWV_Z7G4ieenXLpq-jGiir5LAbuIuwCLcB/s1600/thale-noi-waterfowl-reserve-phatthalung-03.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 1 Khuan Khanun-Thale Noi Road Khuan Khanun, Phatthalung Thailand</li>
                <li>Tel : +66 7468 5230</li>
                <li>Opening time : -</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Phatthalung1;

