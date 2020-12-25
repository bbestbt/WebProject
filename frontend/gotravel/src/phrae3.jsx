import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class phayao3 extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNorth">
         <br></br>
            
            <h1 align="center">Phrathat Doi Leng</h1>
            <div align="center">
                <img src="https://mychiangmaitour.com/wp-content/uploads/2018/10/wat_phra_that_doi_leng003.jpg"  id="touristInfo" ></img>
                <img src="https://i0.wp.com/www.mychiangmaitravel.com/wp-content/uploads/2019/03/Wat-Phra-That-Doi-Leng01.jpg?fit=1200%2C675&ssl=1"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000016_1.jpeg"  id="touristInfo" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Phra_That_Doi_Leng..JPG"  id="touristInfo" ></img>            
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Cho Hae, Phrae 54000 Thailand</li>
                <li>Tel : +66 5567 1466  </li>
                <li>Opening time : 08:00-17:00</li>
                <li><span>Fee : -</span></li>
                <li>Category : Temple</li>
            </ul> 
        </div>
        </div>

        

       
        
        );
    }
}
 
export default phayao3;
