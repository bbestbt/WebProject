import React, { Component } from 'react';

import {
 
    Link,

  } from 'react-router-dom';

class phu extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Nong Bua Lamphu</h1>
        </div>

        <div align="center">

        <div class="placeProvince">
        <Link to="/phu1"> <img src="https://www.orientalescape.com/images/thailand/attraction/rkw-wat-tham-sua02.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Tham Erawan Temple</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/phu2"> <img src="https://lh6.googleusercontent.com/-RKXMpTrqQcA/WCbrzX07ihI/AAAAAAAAxMI/2_9I9ib6JQwkeALEJJ0RGQ5Wbkown7QzQCLIB/s1600-w400/" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Somdej Phra Naresuan Maharat Shrine</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/phu3"> <img src="https://lh3.googleusercontent.com/proxy/q9MxvjLnk2qxv39XF7t1s8uTjX9NGH6IUbrGCO8CheMevQdaCZopf2kyF4AUMGG0FhWrvpFnRfHhxJMFjIdhbbMuaH3edZ0bCUDKxLhGebzcUB_WrOt-uK2D5yVd9gbSfAuAArtWE_i_IJHpXOtVpjboMm35nufn" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Tham Klong Phen</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/phu4"> <img src="https://www.isanrealestate.com/wp-content/uploads/2020/01/IMG_6630_resize.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Nong Bua Lam Phu Fishing Park</h6>    
        </div>

        </div>

        </div>
        </div>


        );
    }
}
 
export default phu;
