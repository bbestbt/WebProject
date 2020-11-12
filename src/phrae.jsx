import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class phrae extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Phrae</h1>
        </div>

        <div class="placeProvince">
        <Link to="/phrae1"> <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03012772_1.jpeg" alt="Wat Phra That Su Thon Mongkhon Khiri" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phra That Su Thon Mongkhon Khiri</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/phrae2"> <img src="https://www.thailandee.com/img/villes/phrae/phae-muang-phi-park-phrae.jpg" alt="Phae Mueang Phi" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phae Mueang Phi</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/phrae3"> <img src="https://mychiangmaitour.com/wp-content/uploads/2018/10/wat_phra_that_doi_leng001.jpg" alt="Phrathat Doi Leng"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phrathat Doi Leng</h6>

        </div>


        <div class="placeProvince">
        <Link to="/phrae4"> <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2019/09/1-SON09533-800x533.jpg" alt="Meajok Hot Springs"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Meajok Hot Springs</h6>

                
        </div>

        </div>
        </div>

        

       
        
        );
    }
}
 
export default phrae;
