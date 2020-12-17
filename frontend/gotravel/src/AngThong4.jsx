import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class AngThong4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Sang Kratai</h1>
            <div align="center">
                <img src="https://www.paiduaykan.com/province/central/angthong/pic/watsangkratai1.jpg"  id="touristInfo" ></img>
                <img src="https://www.osmuppercentral.go.th/tmp/58cd825a60bf7244c76f76c281dc2b2b.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/nI5R4oFyiexr-ROtZGlLST97vjCBylt0fw7SYz6VzZw-E1YeJoOhJOaw4xUu2pRKHOQdyLeJT3vEJ3Hcp_g0bKJrgHgCpk7LHPT7x6jjow6jMyPLsEbD8VqgHnnL7tIVOxDUnSA"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/-gMCl9N3OEXeTlh_gb1FrutT_TcMEpKUAPoPS8p6UJA-vkvGZNl6I0jq6cpCrQLMG9q_FOT8m91BPeU6Y-8o0JFDHBnHcQ2bMItcEOY_eZKywxyse8f_th0on_ZEwE_qmdwHfm0"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 4 Mueang Ang Thong, Ang Thong Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 8:00 - 17:00</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default AngThong4;

