import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class PhraNakhonSiAyutthaya1 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Ayothaya Floating Market</h1>
            <div align="center">
                <img src="https://lh3.googleusercontent.com/proxy/WhrsS5B_HTKUMHcXrjpTDxJ75W8rmo34reGSTUTTQpkRLfI6NwUNFrHq5EX-vxBHSzuxK7JJZXoqprv9fvUdpikWExgbO6wSfywG42SFge1v0dsR0x6sYqnL0J_KVlbIWg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/lqoe__imCWQY_FdiYLk3vpG1eTLyCaZxN59_ydvp9AdEy99k9hBXNnX5KhSdppYyvm3qVGd2_7cGGc0gRTesJqFvtarBLN8M3TZ7dxesFG0A1NcJLP6ARH7xO6XtOh5-_A"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/WhZUJxnbqkbv3BIJQ6GFlvbFvlHKBZjIBEGppCOJPS5GgN0iYLrWfb-N-utIkWSljeyImThlEUFE2ZYAQDuxA280WHIE45vP2wHbjLfJQApkjOq8HrqVqwbyqodMON5-Bg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/EMibjPYAFuT_XxfqkF2cjbhF8qCGDhCyxyP5Db1PDQ9j_LJBBrYwZX02UmJHjZfdGpKalizocGlzWV6TObP-JWzVtXbtUPye5lzydDsMmuvfm7ZSTqyLG5wXLShc"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : CPhai Ling Phra Nakhon Si Ayutthaya Phra Nakhon Si Ayutthaya 13000 Thailand</li>
                <li>Tel : -</li>
                <li>Opening time : 9:00 - 18:00</li>
                <li><span>Fee : 200 Baht</span></li>
                <li>Category : Market</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default PhraNakhonSiAyutthaya1;
