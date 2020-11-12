import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class SuratThani3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Tai Rom Yen National Park</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013033_1.jpeg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/pl_RrrCDFjmrZ7pleisOh3q21AjqZC_6qSnnVnfdoffvR7DDwiAo8RnD6Gsmj2pYmPjMKi-iDbBUAovyTZ9PzAyU6Za4zLJBFSuCI6q_Y6E5Bo2hOTOnhuoKOCYRXrCFZ-SqLFG-ThkM9U9f4J6t2LRp9YZhuxoog6fd"  id="touristInfo" ></img>
                <img src="https://alchetron.com/cdn/tai-rom-yen-national-park-61557e10-60c3-40b5-aec9-a0ded3b1d0c-resize-750.jpg"  id="touristInfo" ></img>
                <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/6c/3f.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ban Na San, Surat Thani Thailand</li>
                <li>Tel : +66 7734 4633</li>
                <li>Opening time : 8:30 - 16:30</li>
                <li>Fee : Adult 200 Baht, Children 100 Baht</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default SuratThani3;

