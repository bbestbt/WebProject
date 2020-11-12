import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class buri4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Khao Kradong Forest Park</h1>
            <div align="center">
                <img src="https://www.touronthai.com/gallery/photo/49001004/t4khaokradong04.jpg"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/nitimongkolchai/nitimongkolchai1607/nitimongkolchai160700204/61271601-rope-bridge-or-suspension-bridge-in-forest-at-khao-kradong-forest-park-in-buriram-province-thailand-.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0b/97/1c/f3/khao-kradong-forest-park.jpg"  id="touristInfo" ></img>
                <img src="https://www.roomarella.com/wp-content/uploads/2019/09/2-1.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Amphoe Mueang, Buriram Thailand</li>
                <li>Tel : +66 84 727 8970</li>
                <li>Opening time : 8:00 - 18:00</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default buri4;

