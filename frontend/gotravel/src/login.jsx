import React,{ Component } from "react";
// import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class login extends Component{
    render(){
        return(
        <div>
        {/* <NavbarMain /> */}
        <div class ="topBanner">
        </div>  
            <br></br>
                <div align = 'center' id='info2'>
                    <img src ={require("./loco.png")} alt= "loco"></img>
                    
                    <p align = 'center'>
                        <h1 >Log in to gotravel</h1>
                    </p>
                    
                    <p align = 'center'>
                        <h2 id="user">Username</h2>
                        <input id="userInput" name = 'username'></input>
                    </p>
                    <p align = 'center'>
                        <h2 id="user">Password</h2>
                        <input id="userInput" name = 'password'></input>
                    </p>
                    <p align = 'center'>
                        <input type='checkbox' keep = 'keepmelogin'></input>
                        Keep me logged in  &emsp;&emsp; <a href="https://www.google.co.th/?hl=th">Forgot Password?</a>
                    </p>

                    <p align="center">
                        <Link to="/App"><button id="continue">Log in</button></Link>
                    </p>
                
                    <p align ='right'>
                        <Link to="/signUpPage"><button id="continue">Sign up</button></Link>&emsp;&emsp;
                    </p>
                </div>
        </div>    
        
        );
    }
 
}
export default login;