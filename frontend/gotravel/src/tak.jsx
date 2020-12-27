import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';
 import maekasa from "./west/maekasa.jpg"
 import t2 from "./west/tak2.jpeg"
 import t3 from "./west/tak2.jpeg"
 import t4 from "./west/tak2.jpeg"
class tak extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Tak</h1>
        </div>

        <div class="placeProvince">
        <Link to="/tak1"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/60/67/a1/mae-ka-sa-hotsprings.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mae Kasa Hot Spring</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/tak2"> <img src="https://image.freepik.com/free-photo/thi-lor-su-waterfall-is-most-beautiful-waterfall-thailand_56644-241.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Thi Lor Su Waterfall</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/tak3"> <img src="https://www.egat.co.th/en/images/Media/PD/bhumibol/a_9.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Bhumibol Dam</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/tak4"> <img src="https://media.istockphoto.com/photos/sunset-at-mountain-valley-beautiful-nature-in-doi-thule-tak-province-picture-id947140408?k=6&m=947140408&s=170667a&w=0&h=0BF7GKZh0Yu5PchZkVyaQ-bjyVwQaz8KiaxMCZoD-dE=" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Doi Thule</h6>    
        </div>

        </div>
        </div>

        

       
        
        );
    }
}
 
export default tak;
