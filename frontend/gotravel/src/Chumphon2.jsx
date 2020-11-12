import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Chumphon2 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Mu Ko Chumphon National Park</h1>
            <div align="center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Mu_Ko_Chumphon_National_Park_Chumphon_Thailand.jpg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Mu_Ko_Chumphon_National_Park_03.jpg/1024px-Mu_Ko_Chumphon_National_Park_03.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/RaCdhU8lsRbvz6FombV-RV8Tcil0rf8xDh3OdPybXlomueujlWt9kUiznrDvxwWnzVCdUMwzGi5mIkOhh-3pK4mFuHg5n9-4uEntPnOSLV8ZLi1AL6Elc7Rr"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/70JbOaGIY7wb4G8POt6J73LUncZRDRvK8K-D_NuRCL9J6y_WYu3b8wIuSBSZG2KdIR6zvXDgA9ngMtath8eI0qwcBfQSc01NPjEwUmj5dFRKmnbvaeNFIahf8A"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 1/4 Moo 5 Mueang Chumphon, Chumphon Thailand</li>
                <li>Tel : +66 7755 8144</li>
                <li>Opening time : 08.00 - 16.30</li>
                <li>Fee : Adult 200 Baht, Children 100 Baht</li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Chumphon2;

