import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class maha1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Kaeng Loengchan</h1>
            <div align="center">
                <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171124b2858c19d5da0848a0705841903c0fe4102235.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/aQuHI2w0WWszMznylVccftIZHpHk99TWDF_K7E3J8xW2sgqnDk-sbEph1_Xm7Ns1J8AFqu_isDR_5qez6pJJrlqvEbwOuzDFiHdGW2BQ5Yjl8hd6JIumLFqJ1UY"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/X1pirF3sIWqOKpWTcXjSFlaOCtmonavbO5xIAwzgyFxmthQ1qFSXV6UiaVdv_AU_hqfVfthzGuaqJcXQ8jTrNxXHLCOa27cBWQUgM_CClM39I7sInzyBiHqUGDk"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/QRfgDs1BrdDm4Hvf0gvN2XTSgoQs9GGwaAaUR0HjL3YXopHjooxKWFLHuAjqYPb7_ccnme6pNOK34XFGaJEN6znu3ytk9UITl3X-4bsVPyTkIsM4I4H31nZoaQ"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Kaeng Loeng Chan Mueang Maha Sarakham Maha Sarakham 44000</li>
                <li>Tel : -</li>
                <li>Opening time : 6:00 - 19:00 </li>
                <li>Fee : -</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default maha1;

