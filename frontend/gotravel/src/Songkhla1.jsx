import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Songkhla1 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Chang Puak Camp</h1>
            <div align="center">
                <img src= "https://media-cdn.tripadvisor.com/media/photo-s/17/a9/dd/14/photo0jpg.jpg"  id="touristInfo" ></img>
                <img src= "https://joinfull.com/uploads/cms/images/chang-puak-camp-damnoen-saduak-10.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 86 Moo 1, Kanchanawanit Road Hat Yai, Songkhla Thailand</li>
                <li>Tel : +66 7444 6446</li>
                <li>Opening time : 10:00 - 17:00</li>
                <li>Fee : -</li>

                <li>Category : Education</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Songkhla1;
