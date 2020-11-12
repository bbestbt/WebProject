import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class chachoengsao4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgEast">
         <br></br>
            
            <h1 align="center">Ban Mai 100-Year Market</h1>
            <div align="center">
                <img src="https://www.travel-chachoengsao.com/wp-content/uploads/2019/11/Ban-Mai-100-Year-Market-5.jpg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/j7BwU9vQE9JECAkXdsJfrqDHeHzzU5RVnxWUWLQ6epdZnbE7_F5kNK92fkk4MdYO4W7OJlQ3gF5JD8R4msr3Pxkoc-ylyMksW5kCqS7uoAIDW-ZVow"  id="touristInfo" ></img>
                <img src="https://www.travel-chachoengsao.com/wp-content/uploads/2019/11/Ban-Mai-100-Year-Market-1.jpg"  id="touristInfo" ></img>
                <img src="https://www.travel-chachoengsao.com/wp-content/uploads/2019/11/Ban-Mai-100-Year-Market-4-1024x384.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Supakit Road, Ban Mai Subdistrict, Mueang District, Chachoengsao Province 24000</li>
                <li>Tel : 089-887-7161</li>
                <li>Opening time : Saturday-Sunday and public holidays 09.00-17.00 </li>
                <li>Fee : - Baht </li>
                <li>Category : Market </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default chachoengsao4;

