import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class AngThong3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Pa Mok Worawihan</h1>
            <div align="center">
                <img src="https://thailandtourismdirectory.go.th/th/file/get/file/20180828d3ca1af602dd4d617a99b5e4c6027d32143443.jpg"  id="touristInfo" ></img>
                <img src="https://palanla.com/file_managers/domestic_location/Pa%20Mok%20Worawihan%20Temple/001.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/6CdWuCM1mI1zgOol2FUaRRDiDcKIUlc7F1HblGIJ8TYMDhYEX4c2iATKGh7x8zGiCMfzOWAZe4-1xR63Ny00bTMUfHrJTB869STVUlavvYd9v_JypBfEc8B_ew"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/VIj7lvt8ITwFTetQsh1rU3b5U9D1_y-2fO5Bll-1zhR8cn9zkB44dND0XUbmBZScyPuOlilzG4GRGFEpjbaXPjmeheYbyT5Rf-MLOM5Uee4piBWwAvNfbVYDriH2ga-FPL9bVg6D354QPY1eM_c-Mk8L80Yr"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Pa Mok, Ang Thong Thailand</li>
                <li>Tel : +66 35-661286 </li>
                <li>Opening time : 6:00 - 18:00 </li>
                <li>Fee : - </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default AngThong3;

