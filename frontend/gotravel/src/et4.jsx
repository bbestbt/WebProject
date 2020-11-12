import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class et4 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
            
            <h1 align="center">Wat Burapha Phiram</h1>
            <div align="center">
                <img src="https://lh3.googleusercontent.com/proxy/l4GwS9pZ3BJnSQSHmKXUJJuOsevc2vG_yWkH3xGdQxqrIMdUhtYiCTz_2dz9Ca8_Pk9RxZv7j0NQHrCx5G-JnNURI0MPok1BSSwNXdqu9kQdv-So8kjzfp3kzHb8ZIe6h6YuO-PCFGFsrXI2KRiz"  id="touristInfo" ></img>
                <img src="https://mapio.net/images-p/58057807.jpg"  id="touristInfo" ></img>
                <img src="https://templetoday.files.wordpress.com/2018/07/wat-burapha-phi-ram015.jpg?w=680"  id="touristInfo" ></img>
                <img src="https://temple-thai.com/wp-content/uploads/2019/05/wat-burapha-phiram-11.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : 559/1 Padungpanict Rd Tambon Nai Mueang, Roi Et 45000 Thailand</li>
                <li>Tel : +66 43 511 374</li>
                <li>Opening time : 6:00 - 17:00</li>
                <li>Fee : -</li>
                <li>Category : Temple</li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default et4;

