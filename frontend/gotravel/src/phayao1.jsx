import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phayao1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Phu Sang National Park</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/09/86/c8/a4/phu-sang-national-park.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/IMAGE/CustomPOI/Picture/P03012800_pic1.jpg"  id="touristInfo" ></img>
                <img src="https://mychiangmaitour.com/wp-content/uploads/2019/05/phu_sang_national_park02.jpg"  id="touristInfo" ></img>
                <img src="https://mychiangmaitour.com/wp-content/uploads/2019/05/phu_sang_national_park03.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : National Highway 1093 Phu Sang Phayao 56110</li>
                <li>Tel : +66 5440 1099 </li>
                <li>Opening time :  6 am to 6 pm.</li>
                <li><span>Fee : Adult 100 Baht (Children 50 Baht) </span></li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default phayao1;
