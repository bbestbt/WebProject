import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Chumphon3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Khao Chedi Temple</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/14/fc/84/ed/wat-khao-chedi.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/d5/a8/89/wat-khao-chedi.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandee.com/img/image?v=2&a=nuLdWqbbd1Hv2TUVmPKrDROeLT%3DMEqJeLyUVMu-t25OKEDYfLDAeDROZL5QhM5gh%3DTNh25ffL1uP2yAN2kSjMyMrERHq2TB32Rm6YPs-ERHKJTV02wGrXvSuLy-9mvYtLD41JDYx2TOFmPKqYk-rLyOPpT-rX0B1%3DTI9mvutJyVv2TANmPevpTUxJk-rM5V6Jkm6Jvg9M5AO"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/IMAGE/CustomPOI/Picture/P03012981_pic1.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 119 Moo 7, Phet Kasem Road Mueang Chumphon, Chumphon Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 8.00 - 17.00</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Chumphon3;

