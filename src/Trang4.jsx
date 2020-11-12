import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Trang4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Lay Khao Kob Cave</h1>
            <div align="center">
                <img src="https://lh3.googleusercontent.com/proxy/540exQS97Zbb_rl9GYFkVqe-fkilHVVoIDXTX5ujelhOYTLnqCfeLm41y1mU5Dr08ANBjfGun_7PbDlIlHx_DvYVscV-u6X00xtmvkd4ZJuN1Ga-FWry36ziprNgQDM"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/lVtvQpbg53SesSa744I-lT45fNKaBz_SlZ3DqsSTz_NooW28jTK9TJSZb4nQI3RBDI1wGMCWZqeqQ6VDHIBxoyNzmaLxBV7Bm26RkuggqsfYnTK67MIMImE0Q2SuemR9CPHS3ML_hJ8QPBlElu4pV8TqRfNHlZhR"  id="touristInfo" ></img>
                <img src="https://2.bp.blogspot.com/-xgi-TMQpka0/TdAA_sDFy7I/AAAAAAAAGIw/wbPc_8dxHAo/s1600/khao-kob-cave-thailand.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/IMAGE/CustomPOI/Picture/P03013106_pic1.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 59/1 Moo 1, Trang-Krabi Road Huai Yot, Trang Thailand</li>
                <li>Tel : +66 7550 0117</li>
                <li>Opening time : 8.00 - 17.00</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Trang4;

