import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class SamutSakhon3 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
            
            <h1 align="center">Wat Nangsao</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/image/CustomPOI/Picture/P03001368_1.jpeg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/f1/5d/62/caption.jpg"  id="touristInfo" ></img>
                <img src="https://temple-thai.com/wp-content/uploads/2017/08/wat-nang-sao-1.jpg"  id="touristInfo" ></img>
              
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Krathum Baen, Samut Sakhon</li>
                <li>Tel : - </li>
                <li>Opening time : 6.00 am-5.00 pm</li>
                <li><span>Fee : -</span></li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default SamutSakhon3;
