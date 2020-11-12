import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class khai4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Sala Kaew Ku</h1>
            <div align="center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/Sala_Keoku.JPG"  id="touristInfo" ></img>
                <img src="https://ttnotes.com/images/sala-kaew-ku-nong-khai-2.jpg"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/urfl/urfl1702/urfl170201416/71619757-the-sala-kaew-ku-sculpture-park-near-the-town-of-nong-khai-in-isan-in-north-east-thailand-on-the-bor.jpg"  id="touristInfo" ></img>
                <img src="https://www.renegadetravels.com/wp-content/uploads/2014/07/sala-kaew-ku-sculpture-garden-9-690x517.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Samakkhi community, Nong Khai Thailand</li>
                <li>Tel : +66 93 314 6102</li>
                <li>Opening time : 8:00 - 17:00</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default khai4;

