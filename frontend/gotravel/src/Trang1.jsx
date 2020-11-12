import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Trang1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Hat Chao Mai National Park</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000934_1.jpeg"  id="touristInfo" ></img>
                <img src="https://allpointseast.com/wp-content/uploads/2011/07/Chao-Mai-4-blog.jpg"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/sitthinan/sitthinan1704/sitthinan170400030/75955274-tropical-wild-beach-in-the-trang-province-in-thailand-beside-the-hat-chao-mai-national-park.jpg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Koh_Ngai_07.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Sikao, Trang Thailand</li>
                <li>Tel : +66 7521 3260</li>
                <li>Opening time : -</li>
                <li>Fee : -</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Trang1;

