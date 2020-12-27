import React, { Component } from 'react';


import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class mai extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Chiang Mai</h1>
        </div>

        <div class="placeProvince">
        <Link to="/mai1"> <img src="https://d3h30waly5w5yx.cloudfront.net/images/tour/pictures/doi-inthanon-national-park-1-day-tour-tripguru-1.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Doi Inthanon</h6>          
        </div>


        <div class="placeProvince">
        <Link to="/mai2"> <img src="https://static.asiawebdirect.com/m/bangkok/portals/chiangmai-bangkok-com/homepage/attractions/doi-pui/allParagraphs/BucketComponent/ListingContainer/01/image/doi-pui-village.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Doi Pui</h6>
 
        </div>


        <div class="placeProvince">
        <Link to="/mai3"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Phra_That_Doi_Suthep_01.jpg/1200px-Phra_That_Doi_Suthep_01.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Phra That Doi Suthep</h6>

        </div>


        <div class="placeProvince">
        <Link to="/mai4"> <img src="https://blog.airpaz.com/wp-content/uploads/Wat-Chedi-Luang.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Chedi Luang</h6>

                
        </div>

        </div>
        </div>

        

       
        
        );
    }
}
 
export default mai;
