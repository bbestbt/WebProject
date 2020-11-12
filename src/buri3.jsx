import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class buri3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Pa Khao Noi</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0b/96/d4/a2/wat-pa-khao-noi.jpg"  id="touristInfo" ></img>
                <img src="https://www.asiatravelgate.com/wp-content/uploads/2017/09/Wat-Pa-Khao-Noi-Buriram-Thailand-003.jpg"  id="touristInfo" ></img>
                <img src="https://www.touronthai.com/gallery/photo/49001006/t4khoanoi02.jpg"  id="touristInfo" ></img>
                <img src="https://www.touronthai.com/gallery/photo/49001006/t4khoanoi03.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Samet, Mueang Buri Ram District, Buri Ram 31000 Thailand</li>
                <li>Tel : +66 (0) 44 600 633 </li>
                <li>Opening time : All time</li>
                <li>Fee : - </li>
                <li>Category : Temple </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default buri3;

