import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Nonthaburi extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Nonthaburi</h1>
        </div>
        <div align="center">

        <div class="placeProvince">
        <Link to="/Nonthaburi1"> <img src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/59/2016/11/08040047/10-Nonthaburi-Museum.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">The Museum Of Nonthaburi</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Nonthaburi2"> <img src="https://lh3.googleusercontent.com/proxy/CFLN9n9KrXovImxG2ZOZAZVzwV3YZZy_SHIqZhK1QNsau-KKiDnL99o9DqbRTI7-0FxeqYX7yAs2xw5w-N2MdhB6frOZicf_5YT6n6FRJ5FVWRkJ" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Koh Kred</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Nonthaburi3"> <img src="https://www.tour-bangkok-legacies.com/images/sai-noi-floating-market-stall1.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Sai Noi Floating Market</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/Nonthaburi4"> <img src="https://thailandtourismdirectory.go.th/en/file/get/file/20171214a4288ccfcfd04bdd8707001b9a3af57a102353.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Ta Kian</h6>    
        </div>
        </div>

        </div>
        </div>


        );
    }
}
 
export default Nonthaburi;
