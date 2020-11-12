import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class ubon extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Ubon Ratchathani</h1>
        </div>

        <div class="placeProvince">
        <Link to="/ubon1"> <img src="https://www.thailandee.com/img/image?v=2&a=SdqquW32d1Hv2TUVmPKrDROeLT%3DMEqJeLyUVMu-t%3DTHtLru1pDBP2yg32ygF2A-t%3D5g3ED4KMvoh%3Dyff%3DRuFL5S0ETHupkSjMyMrERHq2TB32Rm6YPs-ERHKJTV02wGrXvSuLy-9mvYtLD41JDYx2TOFmPKqYk-rLyOPpT-rX0B1%3DTI9mvutJyVv2TANmPevpTUxJk-rM5V6Jkm6Jvg9M5AO" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phra That Nong Bua</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/ubon2"> <img src="https://lh3.googleusercontent.com/proxy/KMNgYxbR6Ocxam0IkBQfH7Gr96hIzhdLu2_u95bnBdgWBUOBwP5gR5xKcy5qSMznJS2ZKNDifjFrScbcqvsXZs-ajOnzcpcTA4eWtklUtCe62iNmmWhKFjA" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Pah Nanachat</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/ubon3"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/01/e7/d8/60/main-pagodas-at-wat-nong.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Nong Pah Pong </h6>                
        </div>

        <div class="placeProvince">
        <Link to="/ubon4"> <img src="https://www.gerryganttphotography.com/images/ubonratchathani/DTHU0369WatThungSiMuang.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Thung Si Mueang
</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default ubon;
