import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class phayao extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Phayao</h1>
        </div>

        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/phayao1"> <img src="https://mychiangmaitour.com/wp-content/uploads/2019/05/phu_sang_national_park01.jpg" alt="Phu Sang National Park" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phu Sang National Park</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/phayao2"> <img src="https://www.thegtrider.com/cms/wp-content/gallery/phayao/wat-nantaram/wat-nantaram-chiangkham-1.jpg" alt="Nantaram temple" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Nantaram temple</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/phayao3"> <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2019/07/kwan-phayao001.jpg" alt="Kwan Phayao"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Kwan Phayao</h6>

        </div>


        <div class="placeProvince">
        <Link to="/phayao4"> <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2019/07/mae-puem-national-park01.jpg" alt="Mae Puem National Park"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Mae Puem National Park</h6>

                
        </div>
        </div>

        </div>
        // </div>

        

       
        
        );
    }
}
 
export default phayao;
