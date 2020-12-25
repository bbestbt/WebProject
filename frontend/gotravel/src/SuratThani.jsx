import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class SuratThani extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Surat Thani</h1>
        </div>

        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/SuratThani1"> <img src="https://www.suratthanitourism.com/wp-content/uploads/2019/08/%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B9%82%E0%B8%A1%E0%B8%81%E0%B8%82%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A111.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Suan Mokkhapalaram</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/SuratThani2"> <img src="https://cdn.getyourguide.com/img/tour/5e031bb735885.jpeg/146.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khao Sok National Park</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/SuratThani3"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013033_1.jpeg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Tai Rom Yen National Park</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/SuratThani4"> <img src="https://image.freepik.com/free-photo/sunligh-lake-mountain-rajjaprabha-dam-chiao-lan-dam-surat-thani-province-thailand_66960-69.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Rajjaprabha Dam (Chiao Lan Dam)</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default SuratThani;
