import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class kan4 extends Component {

    render() {  
        return (
        <div>
             
        <div class="topBanner" >
        </div>
        
         <div id="bgTak">
         <br></br>
            
            <h1 align="center">Chang Pheuk Mountain</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013163_1.jpeg"  id="touristInfo" ></img>
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013163_2.jpeg"  id="touristInfo" ></img>
                <img src="https://coconuts.co/public/field/image/16427319_1779585015698419_1488681354054264608_n.jpg"  id="touristInfo" ></img>
                <img src="https://thairesidents.com/wp-content/uploads/2018/11/KhaoChangPhuak4.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address :  Ban Pilok, Thong Pha Phum 71150 Thailand</li>
                <li>Tel : +66 3453 2114</li>
                <li>Opening time : Everyday 8.00-17.00 </li>
                <li><span>Fee : Foreigner 200 Baht for adults and 100 Baht for children</span>
                <br></br>
                <span>Thai 40 Baht for adults and 20 Baht for children</span>
                </li>
                
                <li>Category : Nature</li>
            </ul>


        </div>
        </div>

        

       
        
        );
    }
}
 
export default kan4;


