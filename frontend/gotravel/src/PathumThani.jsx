import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class PathumThani extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgCentral">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Pathum Thani</h1>
        </div>
        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/PathumThani1"> <img src="https://d15kbsmiqz0zlr.cloudfront.net/wp-content/uploads/2019/08/Dream-World-featured-1200x900.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Dream World</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/PathumThani2"> <img src="https://4.bp.blogspot.com/_WmFeXwYSUG8/TOvg81OsaPI/AAAAAAAAACI/rHwvcZuKtU8/s1600/IMG_3300.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Talaad Thai</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/PathumThani3"> <img src="https://www.thailandtourismdirectory.go.th/en/file/get/file/20171215c4ca4238a0b923820dcc509a6f75849b154832.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Rangsit Floating Market</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/PathumThani4"> <img src="https://media-cdn.tripadvisor.com/media/photo-s/12/85/7b/df/ajarn-ah-pae-rong-si.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Sanchao Riverfront Market</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default PathumThani;
