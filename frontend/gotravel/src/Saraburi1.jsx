import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Saraburi1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Namtok Chet Sao Noi National Park</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005928_1.jpeg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/08/91/61/98/namtok-chet-sao-noi-national.jpg"  id="touristInfo" ></img>
         
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Muak Lek, Saraburi</li>
                <li>Tel :+66 3634 4416 </li>
                <li>Opening time :  8:00 A.M. – 5:00 P.M. </li>
                <li><span>Fee :-Baht</span></li>
                <li>Category : Art, Culture, Heritage</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Saraburi1;
