import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class Krabi extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Krabi</h1>
        </div>
        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/Krabi1"> <img src="https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/295580_Viator_Shutterstock_169946.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Emerald Pool (Sa Morakot)</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Krabi2"> <img src="https://static.asiawebdirect.com/m/phuket/portals/krabi-hotels-com/homepage/seedo/shell-cemetery/pagePropertiesImage/shell-cemetery.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Krabi Shell Cemetery (Susan Hoi)</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Krabi3"> <img src="https://i2.wp.com/thailandlocaltravel.com/wp-content/uploads/2018/11/Wat-Maha-That-Wachira-Mongkol-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%A7%E0%B8%8A%E0%B8%B4%E0%B8%A3%E0%B8%A1%E0%B8%87%E0%B8%84%E0%B8%A5.jpg?fit=1000%2C562&ssl=1" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Mahathat Wachira Mongkol</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/Krabi4"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/0c/46/a0/da/monkey-trail.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Monkey Trail</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default Krabi;
