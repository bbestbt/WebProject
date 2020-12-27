import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class mae4 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Doi Samer Dao</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/08/9e/1d/09/doi-samer-dao.jpg"  id="touristInfo" ></img>
                <img src="https://www.takemetour.com/amazing-thailand-go-local/wp-content/uploads/2018/02/Things-to-do-in-Nan-Thailand-Milky-way-above-Doi-Samer-Dao.jpg"  id="touristInfo" ></img>
                <img src="https://i.pinimg.com/originals/0c/48/66/0c48660fe3b03c925e6c4e7a83a1ffac.jpg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Morning_sea_of_mist%2C_Doi_Samer_Dao%2C_Si_Nan%2C_Nan%2C_Thailand.jpg"  id="touristInfo" ></img>

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
 
export default mae4;
