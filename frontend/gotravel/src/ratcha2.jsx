import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class ratcha2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Sala Loi </h1>
            <div align="center">
                <img src="https://www.thailandee.com/img/villes/nakhon-ratchasima/wat-sala-loi-korat.jpg"  id="touristInfo" ></img>
                <img src="https://i.ytimg.com/vi/zGKsyLgMptI/maxresdefault.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandee.com/img/image?v=2&a=2bb%3DLq%3Dbd1Hv2TUVmPKrDROeLT%3DMEqJeLyUVMu-tLvgZ2yOFEDHf%3DyYKpDYeLTgMEq%3Df%3DRuxpTUfETUt2kuFpThKL5WhMvg3p5ffM5VhpkSjMyMrERHq2TB32Rm6YPs-ERHKJTV02wGrXvSuLy-9mvYtLD41JDYx2TOFmPKqYk-rLyOPpT-rX0B1%3DTI9mvutJyVv2TANmPevpTUxJk-rM5V6Jkm6Jvg9M5AO"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013299_1.jpeg"  id="touristInfo" ></img>  
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Pho Klang Subdistrict, Nakhon Ratchasima 30000 Thailand</li>
                <li>Tel : +66 4438 9346</li>
                <li>Opening time : 8:30 - 16:30 </li>
                <li>Fee : -</li>
               
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default ratcha2;

