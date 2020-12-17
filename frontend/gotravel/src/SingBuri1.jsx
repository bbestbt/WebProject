import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phayao1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Phra That Su Thon Mongkhon Khiri</h1>
            <div align="center">
                <img src="https://fastly.4sqi.net/img/general/600x600/vHRcO8VfO0IEZBeAAqZYYPpCyJ0-tDry6EDLVptcJtU.jpg"  id="touristInfo" ></img>
                <img src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/01/Wat-Phra-That-Suthon-Mongkhon-Khiri.jpg"  id="touristInfo" ></img>
                <img src="https://www.thailandbilder.se/Wat_Phra_That_Suthon_Mongkhon_Khiri_Phrae/Wat_Phra_That_Suthon_Mongkhon_Khiri_Phrae_03-Thai.jpg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Phrae_Wat_Phra_That_Suthon_Mongkhon_Khiri_03.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ban huai Namphrik Mu 5, Tambon Den Chai, Den Chai Thailand</li>
                <li>Tel : +66 5461 3876 </li>
                <li>Opening time : All time</li>
                <li><span>Fee : - </span></li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default phayao1;
