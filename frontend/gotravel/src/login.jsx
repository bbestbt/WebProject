import React,{ Component } from "react";
// import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

  
class login extends Component{

    state={
        credentials: {username: '',password: ''}
    }


    login= event=>{
        console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/auth/',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(function(response) {
            if (!response.ok) {
                window.alert("password not match");
                return
            }
            window.location.href="/home"
        })
    //     .then(data=> data.json())
    //     .then(
    //         data=>{
    //             // console.log(data);
    //             console.log(data.token)
              
    //         }
    //     ).catch(error => console.error(error))
    // }
    }

    


    inputChanged= event=>{
        const cred =this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials:cred});

    }

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
                        <input type="text" id="userInput" name = 'username'
                         value={this.state.credentials.username}
                         onChange={this.inputChanged}></input>
                    </p>
                    <p align = 'center'>
                        <h2 id="user">Password</h2>
                        <input type="password" id="userInput" name = 'password'  
                        value={this.state.credentials.password}
                         onChange={this.inputChanged}></input>
                    </p>
                    {/* <p align = 'center'>
                        <input type='checkbox' keep = 'keepmelogin'></input>
                        Keep me logged in  &emsp;&emsp; <a href="https://www.google.co.th/?hl=th">Forgot Password?</a>
                    </p> */}

                    <p align="center">
                        <button onClick={this.login} id="continue">Log in</button>
                        {/* <Link to="/App"><button id="continue">Log in</button></Link> */}
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