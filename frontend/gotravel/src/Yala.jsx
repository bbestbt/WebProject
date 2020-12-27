import React, { Component } from 'react';


import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class Yala extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Yala</h1>
        </div>
{/*         
        <div align="center"> */}

        <div class="placeProvince">
            <Link to="/Yala1"> <img src="https://mpics.mgronline.com/pics/Images/558000001835401.JPEG" class="allPlace" ></img></Link>
                <br></br>
                <br></br>
                <h6 align="center">Bang Lang National Park</h6>          
            </div>


        <div class="placeProvince">
        <Link to="/Yala2"> <img src="https://www.bloggang.com/data/link-conner55/picture/1289136032.jpg" class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Namtok Buke Pilo (Namtok Tawan Ratsami)</h6>
 
        </div>
        


        <div class="placeProvince">
        <Link to="/Yala3"> <img src="https://thailandtourismdirectory.go.th/en/file/get/file/201711035f0eebf9e61d2a02d4f96132db689149133023.JPG"  class="allPlace"  ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Bang Lang Dam</h6>

        </div>


        <div class="placeProvince">
        <Link to="/Yala4"> <img src="https://www.museumthailand.com/thumbFBCover.php?p=upload/cover/1534932004_1656.jpg"  class="allPlace"   ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Betong Museum</h6>
        </div>
        </div>
        

        </div>
        // </div>
        );
    }
}
 
export default Yala;
