import React,{ Component } from "react";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';
  
class addfav extends Component{
    render(){
        return(
        <div>
            <div class ="topBanner">
                <img src ={require("./logo.png")} alt= "logo"></img>
            </div>
            <p>
                <h1 id='province'>Bangkok</h1>
            </p>
            
            <div class= "row"> 
                <div class= "column">
                    <img src={require("./wat phra kaew.jpg")} alt='watphrakaew' width="500" height="300"></img>
                    <p>
                        <h2>Wat Phra Kaew</h2>
                        <button class="button2">add to your favourite</button>
                    </p>
                </div>
                <div class= "column">
                    <img src={require("./wat-ratchanadda-bangkok-l.jpg")} alt='watphrakaew' width="500" height="300"></img>
                    <p>
                        <h2>Wat Ratchanadda</h2>
                        <button class="button2">add to your favourite</button>
                    </p>
                </div>
            </div>
           
            <div class= "row"> 
                <div class= "column">
                    <img src={require("./Damnoen Saduak.jpg")} alt='watphrakaew' width="500" height="300"></img>
                    <p>
                        <h2>Damnoen Saduak</h2>
                        <button class="button2">add to your favourite</button>
                    </p>
                </div>
                <div class= "column">
                    <img src={require("./Wang Na Palace.jpg")} alt='watphrakaew' width="500" height="300"></img>
                    <p>
                        <h2>Wang Na Palace</h2>
                        <button class="button2">add to your favourite</button>
                    </p>
                </div>
            </div>

            <div class= "row"> 
                <div class= "column">
                    <img src={require("./Sao Chingcha.jpeg")} alt='watphrakaew' width="500" height="300"></img>
                    <p>
                        <h2>Sao Chingcha</h2>
                        <button class="button2">add to your favourite</button>
                    </p>
                </div>
                <div class= "column">
                    <img src={require("./NationalPark.jpeg")} alt='watphrakaew' width="500" height="300"></img>
                    <p>
                        <h2>Wat Ratchanadda</h2>
                        <button class="button2">add to your favourite</button>
                    </p>
                </div>
            </div>
            &emsp;

        </div>    
        );
    }
 
}
export default addfav;