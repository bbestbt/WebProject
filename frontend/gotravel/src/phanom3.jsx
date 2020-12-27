import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phanom3 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Phra That Phanom</h1>
            <div align="center">
                <img src="https://www.publicdomainpictures.net/pictures/340000/velka/wat-phra-that-phanom-temple-nakhon-phanom-thailand-1588673558LH4.jpg"  id="touristInfo" ></img>
                <img src="https://patricklepetit.jalbum.net/NAKHON%20PHANOM/PHOTOS/THAT%20PHANOM/Wat%20Phra%20That%20Phanom/K1202185_resize.jpg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Prathatphanom_03.jpg"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/fordzolo/fordzolo1412/fordzolo141200889/34780599-wat-phra-that-phanom-nakhon-phanom.jpg"  id="touristInfo" ></img>  
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 183/13 Chayankun Road That Phanom Subdistrict, That Phanom 48110 Thailand</li>
                <li>Tel : +66 94 543 5888 </li>
                <li>Opening time : 6:00 - 20:00</li>
                <li>Fee : - </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default phanom3;

