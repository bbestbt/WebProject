import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class chai extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Chaiyaphum</h1>
        </div>

        <div class="placeProvince">
        <Link to="/chai1"> <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Mo_Hin_Khao_at_night_%2810673170883%29.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mor Hin Khao</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/chai2"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/04/23/d1/b7/getlstd-property-photo.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Tatton Waterfall</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/chai3"> <img src="https://media.komchadluek.net/img/size1/2017/06/29/zog7h688cg97kjaib8k98eef.jpg?x-image-process=style/lg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Star Tiger Zoo</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/chai4"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Tatton_Waterfall_2014_-_001_%282%29.jpg/1280px-Tatton_Waterfall_2014_-_001_%282%29.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Tatton National Park</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default chai;
