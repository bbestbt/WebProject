import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Yala4 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Betong Museum</h1>
            <div align="center">
                <img src="https://www.museumthailand.com/thumbFBCover.php?p=upload/cover/1534932004_1656.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/e0/c6/bd/betong-museum.jpg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/e0/c6/c9/betong-museum.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/uwU8fe8dqt0GFjXyDNaMSMxtcro9xBh4IyQWdto5LbocARw_k5NkRR2UkaLqccQ5BkJx0KK6gxt4nXf0SpSSB6s6ObtdojPL70VggPYd3J33"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Srisaket Na Noi Nan 55150</li>
                <li>Tel : +66 54 731 714 </li>
                <li>Opening time : All time</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default Yala4;
