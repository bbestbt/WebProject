import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class mae extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Mae Hong Son</h1>
        </div>

        <div class="placeProvince">
        <Link to="/mae1"> <img src="https://mychiangmaitour.com/wp-content/images/maehongson_tour/phrataht_doi_kong_mu/phra_that_doi_kong_mu_temple01.jpg" alt="Wat Phra That Doi Kong Mu" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phra That Doi Kong Mu</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/mae2"> <img src="https://www.budgetcatcher.com/wp-content/uploads/2018/04/Budgetcatcher-Car-Rental-Chiang-Mai-Tham-Lot-Cave-6-799x599.jpg" alt="Tham Lot" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Tham Lot Cave</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/mae3"> <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2017/01/phra_that_mae_yen001.jpg" alt="Chedi Phra That Mae Yen"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Chedi Phra That Mae Yen</h6>

        </div>


        <div class="placeProvince">
        <Link to="/mae4"> <img src="https://i1.wp.com/jonnymelon.com/wp-content/uploads/2019/01/pai-canyon-5.jpg?fit=1000%2C667&ssl=1" alt="Pai Canyon"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Pai Canyon</h6>

                
        </div>

        </div>
        </div>
        );
    }
}
 
export default mae;
