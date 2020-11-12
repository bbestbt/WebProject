import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class planTripPage extends Component {

    render() {  
        return (
        <div>
        <div class="topBanner" >
    
        <img src={require("./loco.png")} alt="loco"></img>
        
        </div>
         <br></br>
        <p align="left">
        <img src={require("./recommended.png")} alt="lrecommend" width="70" height="70"></img>
        <h1 id='recommend'>Recommended Trip</h1>
        </p>

        <div id="tourist1">
            <img src={require("./chaiyaphum.jpeg")} alt="chaiyaphum" class="place" ></img>
            <div class= "tourist-details">
                <div id="icon-with-location">
                    <img src={require("./location.png")} alt="location" width="30" height="30"  ></img>
                    <p id="location"  >Chaiyaphum 2 Days</p>
                </div>
                <h3 id="details">Plan’s Outline</h3>
                <h4 id="details">Day 1 : Chaiyaphum</h4>
                <p id ="details">Pa Hin Ngam National Park / Thep Phana Waterfall / Thep Prathan Waterfall / Sai Thong National Park
                </p>
                <h4 id="details">Day 2 : Chaiyaphum</h4>
                <p id ="details">Tat Ton National Park / Phraya Phakdi Chumphon (Lae) Monument / Phu Phra, Wat Sila-Ard / Phu Laen Kha National Park
                </p>
            </div>
        </div>

        <div id="tourist1">
            <img src={require("./buriram.jpeg")} alt="buriram" class="place" ></img>
            <div class= "tourist-details">
                <div id="icon-with-location">
                    <img src={require("./location.png")} alt="location" width="30" height="30"  ></img>
                    <p id="location"  >Buri Ram - Surin 3 Days</p>
                </div>

                <h3 id="details">Plan’s Outline</h3>
                <h4 id="details">Day 1 : Buri Ram</h4>
                <p id ="details">Phanom Rung Historical Park / Centre of Southern Northeast Culture / Khao Angkhan
                </p>
                <h4 id="details">Day 2 : Buri Ra</h4>
                <p id ="details">Prasat Hin Mueang Tam (Mueang Tam Stone Santuary) / Prasat Wat Khok Ngio / Nong Hong Sanctuary / Big Buddha Image (Phra Phuttharup Patima Santayaphirom Satuek Udom Ratnimitmunin)
                </p>
                <h4 id="details">Day 3 : Surin</h4>
                <p id ="details">Prasat Ta Muean Thom / Sikornpoom Castle / Baan Chan Rom Weaving Village
                </p>
            </div>
        </div>

        <div id="tourist1">
            <img src={require("./Samutsongkhram.jpeg")} alt="Samutsongkhram" class="place" ></img>
            <div class= "tourist-details">
                <div id="icon-with-location">
                    <img src={require("./location.png")} alt="location" width="30" height="30"  ></img>
                    <p id="location"  >Samut Songkhram 2 Days</p>
                </div>
                <h3 id="details">Plan’s Outline</h3>
                <h4 id="details">Day 1 : Samut Songkhram</h4>
                <p id ="details">Khlong Khon Mangrove Forest Conservation Center / Don Hoy Lhod / Thai Dessert Museum / Amphawa Floating Market
                </p>
                <h4 id="details">Day 2 : Samut Songkhram</h4>
                <p id ="details">Tat Ton National Park / Phraya Phakdi Chumphon (Lae) Monument / Phu Phra, Wat Sila-Ard / Phu Laen Kha National Park
                </p>
            </div>
        </div>

       
        <p align="left">
        <img src={require("./favorites.png")} alt="fav" width="70" height="70"></img>
        <h1 id='recommend'>Your favourite place</h1>
        </p>


        <div class="container">
        {/* <p align="left"> */}
            <img src={require("./watNan.jpeg")} alt="watNan" class="place" ></img>
            <div class="overlay">
                <div class="text">
                 <p> Wat Nong Bua</p>  
                <p>Nan</p>
                </div>
            </div>
        {/* </p> */}
        {/* <p id="placeFav">Wat Nong Bua</p>
        <img src={require("./location.png")} alt="location" width="30" height="30"  ></img>
        <p id="location" >Nan</p> */}
        </div>
     
        <div class="container">
        {/* <p align="left"> */}
        <img src={require("./NationalPark.jpeg")} alt="NationalPark" class="place" ></img>
        <div class="overlay">
                <div class="text">
                    <p>Khlong Lan National Park</p>
                    <p>Kamphaeng Phet</p>
                </div>
        </div> 
        
        {/* </p> */}
        {/* <p id="placeFav">Khlong Lan National Park</p>
        <img src={require("./location.png")} alt="location" width="30" height="30"  ></img>
        <p id="location" >Kamphaeng Phet</p> */}
        </div>
        <br></br>
        <hr></hr>
        <footer>
            <h2>credit</h2>
           
        </footer>
        <br></br>
        </div>
        );
    }
}
 
export default planTripPage;
