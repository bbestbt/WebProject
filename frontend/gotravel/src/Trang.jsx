import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class Trang extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Trang</h1>
        </div>

        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/Trang1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000934_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Hat Chao Mai National Park</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Trang2"> <img src="https://tatapi.tourismthailand.org/tatfs/image/CustomPOI/Picture/P03003761_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khao Pina Cave</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Trang3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000031_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Ko Lao Liang Nong</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/Trang4"> <img src="https://lh3.googleusercontent.com/proxy/540exQS97Zbb_rl9GYFkVqe-fkilHVVoIDXTX5ujelhOYTLnqCfeLm41y1mU5Dr08ANBjfGun_7PbDlIlHx_DvYVscV-u6X00xtmvkd4ZJuN1Ga-FWry36ziprNgQDM" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Lay Khao Kob Cave</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default Trang;
