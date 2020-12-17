import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

class Narathiwat3 extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgSouth">
         <br></br>
            
            <h1 align="center">Sirindhorn Peat Swamp Forest Nature Research And Study Centre</h1>
            <div align="center">
                <img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013419_1.jpeg"  id="touristInfo" ></img>
                <img src="https://lh3.googleusercontent.com/proxy/_qOlFcbkhzQglSCvdXwZJfDgvZblN4BYUf2JQV_Y4J4OIt6TABDMjhKUb0XjHphjunOqXFRvsd3Wi-wKTo7mISh6eq02Z9tFAbuHqKD_znogJcw_VaRqnuRNak_0NH-1gCufyYgedA7E-hJTEdpBFYPYpnk2iME5mJk8EvqSToCU-19teuH1tW8uzXMpjRvn_ggn7wD0YB87ecW7IuP8kA"  id="touristInfo" ></img>
                <img src="https://previews.123rf.com/images/thoungkung/thoungkung1410/thoungkung141000071/32088068-wat-pha-nam-yoi-pha-nam-yoi-temple-roi-et-thailand-phra-maha-chedi-chai-mongkol.jpg"  id="touristInfo" ></img>
                <img src="https://www.icon0.com/static2/preview2/stock-photo-wat-pha-nam-yoi-roi-et--thailand-13397.jpg"  id="touristInfo" ></img>
            </div>
            <h2 align="center" id="toKnow">-Thing to know-</h2>
            <ul class="infoAttract">
                <li>Address : Moo 5 Su Ngai Kolok Road Su-ngai Kolok, Narathiwat Thailand</li>
                <li>Tel : +66 7353 6065</li>
                <li>Opening time : 8:00 - 16:00</li>
                <li>Fee : - </li>
                <li>Category : Nature </li>
            </ul>
            
        </div>
        </div>


        );
    }
}
 
export default Narathiwat3;

