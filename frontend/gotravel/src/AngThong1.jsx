import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class AngThong1 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Muang</h1>
            <div align="center">
                <img src="https://amicimieiphukettravelagency.com/wp-content/uploads/2018/05/WAT-MUANG1.jpg"  id="touristInfo" ></img>
                <img src="https://www.m-culture.go.th/angthong/images/article/news458/n20170324114104_1544.jpg"  id="touristInfo" ></img>
                <img src="https://cms.dmpcdn.com/travel/2020/05/26/fafac540-9f50-11ea-81a6-432b2bbc8436_original.jpg"  id="touristInfo" ></img>
                <img src="https://img-ha.mthcdn.com/RfZxwSptjyDd8k25hM43hOhZoKs=/travel.mthai.com/app/uploads/2015/10/DSC_9763-1.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 6 Wiset Chai Chan, Ang Thong 14110 Thailand</li>
                <li>Tel : +66 35-631556, +66 35-631974</li>
                <li>Opening time : 6:00 - 18:00 </li>
                <li>Fee : -</li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default AngThong1;

