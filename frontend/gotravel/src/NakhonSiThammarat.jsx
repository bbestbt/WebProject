import React, { Component } from 'react';

import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class NakhonSiThammarat extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Nakhon Si Thammarat</h1>
        </div>
        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/NakhonSiThammarat1"> <img src="https://lh3.googleusercontent.com/proxy/764Sxj2HGKamh_kc-Woq7Ze4VvpvURHftNnj5uhHV_8LWfZfevY_zk0PzZ53V1d4JidlxojDuucA5QaO6WwuEvTlku-jRvcliDi3r9Lbl3tRVNAdS7ZZ2ViQQI6NUstpKUOP8rPN" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Thung Thong Temple</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/NakhonSiThammarat2"> <img src="https://www.thegtrider.com/cms/wp-content/gallery/phayao/wat-nantaram/wat-nantaram-chiangkham-1.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Nantaram</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/NakhonSiThammarat3"> <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171129ee0c4e1eccd8f1ba9ddc588040ec96fa114628.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Krung Ching Sea Of Fog
</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/NakhonSiThammarat4"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/0d/dd/79/city-wall.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Nakhon Si Thammarat City Pillar Shrine</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default NakhonSiThammarat;
