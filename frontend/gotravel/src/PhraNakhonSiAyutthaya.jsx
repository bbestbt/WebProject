import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class PhraNakhonSiAyutthaya extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Phra Nakhon Si Ayutthaya</h1>
        </div>

        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/PhraNakhonSiAyutthaya1"> <img src="https://lh3.googleusercontent.com/proxy/WhrsS5B_HTKUMHcXrjpTDxJ75W8rmo34reGSTUTTQpkRLfI6NwUNFrHq5EX-vxBHSzuxK7JJZXoqprv9fvUdpikWExgbO6wSfywG42SFge1v0dsR0x6sYqnL0J_KVlbIWg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ayothaya Floating Market</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/PhraNakhonSiAyutthaya2"> <img src="https://go.ayutthaya.go.th/wp-content/uploads/2017/09/ay-qr100f-900x480.jpg" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Tungbuachom Floating Market</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/PhraNakhonSiAyutthaya3"> <img src="https://ttnotes.com/images/thai-boat-museum-ayuthaya.jpg" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Thai Boat Museum</h6>

        </div>


        <div class="placeProvince">
        <Link to="/PhraNakhonSiAyutthaya4"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03014322_1.jpeg"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Archive Of Queen Suriyothai Monument</h6>

                
        </div>
        </div>

        </div>
        // </div>
        );
    }
}
 
export default PhraNakhonSiAyutthaya;
