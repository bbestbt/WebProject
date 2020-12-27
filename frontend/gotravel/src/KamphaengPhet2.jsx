import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class KamphaengPhet2 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Phra Ruang Hot Spring</h1>
            <div align="center">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/c6/68/8f/phra-ruang-hot-springs.jpg"  id="touristInfo" ></img>
                <img src="https://www.bangkokpost.com/photos_content/large/prefix_1/2003/23003/23003-13018109799kkfkwep0.jpg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P01004030_1.jpeg"  id="touristInfo" ></img>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/2e/f1/3b/relax-here.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Lan Dokmai, Kamphaeng Phet 62110 Thailand</li>
                <li>Tel : +66 86-403–3537, +66 55–741–787</li>
                <li>Opening time : 8:00 - 17:00 </li>
                <li>Fee : Visit - Free </li>
                <li>      Rent a Room - 100 - 1500 Baht </li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default KamphaengPhet2;

