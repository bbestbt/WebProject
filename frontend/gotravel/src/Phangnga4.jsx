import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Phangnga4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Mu Koh Similan National Park</h1>
            <div align="center">
                <img src="https://www.khaolaktransfer.net/wp-content/uploads/2018/09/Mu-Koh-Similan-National-Park-Phang-Nga-Thailand-003.jpg"  id="touristInfo" ></img>
                <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=610x10000:format=jpg/path/sb23e88ce5c2fcfcd/image/ie2bb25182d7d2d31/version/1413195384/nationalpark-mu-ko-similan.jpg"  id="touristInfo" ></img>

            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Khura Buri, Phang Nga Thailand</li>
                <li>Tel : +66 7659 5045</li>
                <li>Opening time : -</li>
                <li>Fee : -</li>
                <li>Category : Nature</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Phangnga4;

