import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class phayao4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Mae Puem National Park</h1>
            <div align="center">
                <img src="https://lh3.googleusercontent.com/proxy/9uEWHFn47OmNETTSAHjf9NVr7zEmGL4Wt8Dn2ec9Zie88eJOGi8Ks5F9A1hOJtryaZET0A9dDhm0onzfQ27bDXAKihI3eA5UsU_yrYjNHeANO1FqvEqhFi3wTNHvTh9GFbD80SeDQ1i8rEUbmeKSQFCby-k"  id="touristInfo" ></img>
                <img src="https://www.mychiangmaitravel.com/wp-content/uploads/2019/07/mae-puem-national-park03.jpg"  id="touristInfo" ></img>
                <img src="https://mychiangmaitour.com/wp-content/uploads/2019/05/mae_puem_national_park01.jpg"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/kobchaima/kobchaima1701/kobchaima170102527/69048980-landscape-view-of-mae-puem-national-park-thailand.jpg"  id="touristInfo" ></img>
                
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Ban Pa Tueng, Mae Chai 56130 Thailand</li>
                <li>Tel : +66 93 265 3035 </li>
                <li>Opening time : All time</li>
                <li>Fee : Adult 100 Baht, Children 50 Baht</li>
                <li>Category : Nature</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default phayao4;
