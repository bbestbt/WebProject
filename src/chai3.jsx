import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class chai3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Star Tiger Zoo</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/02/15/1a/chaiyaphum.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/dC7xEjvYMVYg1hn7nbpSr3Ms8s3EODOcsPqXkiyjKBnv7UqkDvX8mU-3bPjo0l3ecUzFSeUp5xCDTREreW8e6j5_wIKadZzsxprXHBs9"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/p/AF1QipM41pKCVOtaTp4dVUtIt01oxM4E0WIvbaMtTyk4=w1024-k"  id="touristInfo" ></img>
                <img src="https://thailandtourismdirectory.go.th/th/file/get/file/201808286300522380768817251be8a2e3670983114548.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 121 Moo 3, Khok Soong, Chaiyaphum 36000 Thailand</li>
                <li>Tel : +66 44 053 088 </li>
                <li>Opening time : 8:00 - 18:00</li>
                <li>Fee : Foreigner - 100 Baht</li>
                <li>Local - 50 Baht (Children - 20 Baht) </li>
                <li>Category : Zoo,Waterpark </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default chai3;

