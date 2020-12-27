import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class Bangkok extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Bangkok</h1>
        </div>
        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/Bangkok1"> <img src="https://woodychannel.com/wp-content/uploads/2015/05/pho-750x603.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Pho</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Bangkok2"> <img src="https://media.timeout.com/images/103743479/630/472/image.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Arun</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Bangkok3"> <img src="https://hello2day.com/wp-content/uploads/2020/07/safari-world-00-1050x701.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Safari World</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/Bangkok4"> <img src="https://rabbitweekend.com/wp-content/uploads/2020/06/cover-jim-thompson-1140x570.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Jim Thompson House</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default Bangkok;
