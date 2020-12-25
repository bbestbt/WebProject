import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phayao2 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Phae Mueang Phi</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012779_1.jpeg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Ghost_Canyon%2C_Phae_Muang_Phi%2C_Northern_Thailand.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/51/a4/91/phae-muang-phi-forest.jpg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Phae_Mueang_Phi_Forest_Park2.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Tambon Nam Cham, Phrae Thailand</li>
                <li>Tel : +66 5451 1162</li>
                <li>Opening time : 7:00 - 18:00</li>
                <li>Fee : 20 Baht </li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>
        );
    }
}
 
export default phayao2;
