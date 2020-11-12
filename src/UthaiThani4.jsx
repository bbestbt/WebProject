import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class ratcha4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Bung Ta Lua Water Park</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/d3/a1/44/photo1jpg.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/pUqAnbxbTk0m7P_5d2rQJpzSVU1x_0MfY4DF_Bzpis_SHg47IEBMWJ3-IUuKcoObWNLboQQruvC9bcMrHSi29cTZIMlFMmeYJHblAmyJOkFzawaQexqwQZ_IihI"  id="touristInfo" ></img>
                <img src="https://itsbetterinthailand.com/wp-content/uploads/sites/4/2019/02/IMG_20180706_054934-800x600.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/jls0K1wjpIGCZNRF2HYtI6Vq5NOCH5qNHXlH2xy13Mpj2gML6DhEI_6hyI04Xeg0lGb4-z8NqNBJHs38pb8BJ0bSMBiCKeKO2M89c5V_qYJIk8nqV3n34_5mRF8"  id="touristInfo" ></img>  

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Nong Phai Lom, Suranaree Army Camp, Nakhon Ratchasima 30000 Thailand</li>
                <li>Tel : +66 42 581 484</li>
                <li>Opening time : 5:00 - 21:00</li>
                <li>Fee : -</li>
                <li>Category : Landmark</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default ratcha4;

