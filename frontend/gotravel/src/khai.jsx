import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class khai extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Nong Khai</h1>
        </div>

        <div class="placeProvince">
        <Link to="/khai1"> <img src="https://patricklepetit.jalbum.net/NONG%20KHAI/PHOTOS/MUEANG%20NONG%20KHAI/Wat%20Po%20Chai/N0216047_resize.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Pho Chai</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/khai2"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/25/87/91/nong-khai-aquarium.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Nong Khai Aquarium</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/khai3"> <img src="https://www.muangboranmuseum.com/wp-content/uploads/2018/12/north-east.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phrathat Bang Phuan</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/khai4"> <img src="https://www.thailandee.com/img/image?v=2&a=uW53LWLqd1Hv2TUVmPKrDROeLT%3DMEqJeLyUVMu-tLvOFJ1uZ2ygeDROFL5S0EThKpTNhM5g9pkuZpTAqEThuEve-J1m9m0%3DeJwBKmPK5acs9mvfV2T%3DK%3DRm6L0A9LR-rp5OhMwHVMqYeL5WrXPMuERH9L5YfLRm6%3DwHuJk-rLTON2TJeJTGrXvJfLwYVERHx2DeVmPevpTUxJD3z" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Sala Kaew Ku
</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default khai;
