import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class bueng2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Phu Tok</h1>
            <div align="center">
                <img src="https://www.thailandee.com/blog/wp-content/uploads/wat-phu-tok-bueng-khan-63-600x401.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandee.com/img/image?v=2&a=%3DMLCu5Wnd1Hv2TUVmPKrDROeLT%3DMEqJeLyUVMu-tLvOFJ1uZ2ygeDROqpDGhMyfuEDBt21ur%3DTAFJ1uZ2ygFEim1Eve-J1m9m0%3DeJwBKmPKxacs9mvfV2T%3DK%3DRm6L0A9LR-rp5OhMwHVMqYeL5WrXPMuERH9L5YfLRm6%3DwHuJk-rLTON2TJeJTGrXvJfLwYVERHx2DeVmPevpTUxJD3z"  id="touristInfo" ></img>
                <img src="https://www.thailandee.com/img/image?v=2&a=unnO2Cund1Hv2TUVmPKrDROeLT%3DMEqJeLyUVMu-tLvOFJ1uZ2ygeDROqpDGhMyfuEDBt21SjMyMrERHq2TB32Rm6axs-ERHKJTV02wGrXvSuLy-9mvYtLD41JDYx2TOFmPKqYk-rLyOPpT-rX0B1%3DTI9mvutJyVv2TANmPevpTUxJk-rM5V6Jkm6Jvg9M5AO"  id="touristInfo" ></img>
                <img src="https://www.thailandee.com/blog/wp-content/uploads/wat-phu-tok-bueng-khan-50-600x401.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Nasang Sriwilai Buengkarn 38220</li>
                <li>Tel : +664232 5406/7</li>
                <li>Opening time : 6:30 - 17:30 </li>
                <li>Fee : - </li>
                <li>Category : Temple,Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default bueng2;

