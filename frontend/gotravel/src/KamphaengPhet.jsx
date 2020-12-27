import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class KamphaengPhet extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Kamphaeng Phet</h1>
        </div>

        <div align="center">

        <div class="placeProvince">
        <Link to="/KamphaengPhet1"> <img src="https://www.renown-travel.com/images/kamphaeng-phet-historical-park-l.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Kamphaeng Phet Historical Park</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/KamphaengPhet2"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/c6/68/8f/phra-ruang-hot-springs.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phra Ruang Hot Spring</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/KamphaengPhet3"> <img src="https://images.world-of-waterfalls.com/Khlong_Lan_021_01042009.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Klong Lan Waterfall</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/KamphaengPhet4"> <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Khong_Klung_creek_in_Mae_Wong_Netional_park.JPG" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mae Wong National Park</h6>    
        </div>
        </div>

        </div>
        </div>


        );
    }
}
 
export default KamphaengPhet;
