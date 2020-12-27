import React, { Component } from 'react';

import {
    
    Link,
   
  } from 'react-router-dom';

class Phuket extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Phuket</h1>
        </div>

        {/* <div align="center"> */}

        <div class="placeProvince">
        <Link to="/Phuket1"> <img src="https://content.phuket101.net/wp-content/uploads/20190124233651/karon-viewpoint-phuket.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Karon Viewpoint</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Phuket2"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Nai_Yang_Beach%2C_Phuket_%284448621322%29.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Sirinat National Park</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Phuket3"> <img src="https://media.phuket-plaza.com/images/pre/large/170129-140736.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Nam Tok Bang Pae</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/Phuket4"> <img src="https://cdn.phuket.net/bucket/directory/size/600/400/2011/10/pud-jor-shrine-jui-dtui-4.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Pud Jor Shrine</h6>    
        </div>
        </div>

        </div>
        // </div>


        );
    }
}
 
export default Phuket;
