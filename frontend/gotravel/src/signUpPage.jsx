import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

import regis from "./regis.png"

class signUpPage extends Component {
   

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: '',
    //         firstname:'',
    //         lastname:'',
    //         password :'',
    //         confirmPassword:'',
    //         // password_has_error:false
          
    //     };
    // }


    checkPassword(password ,confirmPassword) {
         if(password === confirmPassword) {
            // this.setState({password_has_error:true});
            alert("password match");
            return true; 
        }
        else { alert("password not match")
        return false;
            // this.setState({password_has_error:false});
        }
    }

    // handleChange(event) {
    //     const { name, value } = event.target
      
    //     this.setState({[name] : value }, () => {
    //         if (name == 'password' || name == 'confirmPassword')
    //           this.checkPassword();
    //         }
          
    //     );
    //   }


    state={
        credentials: {username: '',password: '',confirmPassword:''}
    }

    register= event=>{
        if(this.checkPassword(this.state.credentials.password,this.state.credentials.confirmPassword)){
            fetch('http://127.0.0.1:8000/api/users/',{
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(this.state.credentials)
            })
            .then(function(response) {
                if (!response.ok) {
                    window.alert("username already exist");
                    return
                }
                window.location.href="/login"
            })
        }
       
        // .then(
        //     data=>{
        //         console.log(data.token)
                
        //     }
        // ).catch(error => console.error(error))
        
    }

    inputChanged= event=>{
        const cred =this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials:cred});

    }

    render() {  
        return (
        <div>
            <NavbarMain />
        <div class="topBanner" >
            { <img src={require("./logo.png")} alt="logo"></img> }
        </div>
        {/* <div id="bgRegis"> */}
        <br></br>
        <br></br>
        
        <div id="info">
           
            <div class= "register-header">  
                <img src={regis} alt="register"  width="30" height="40" class="register" ></img>
                <h1 id='regis'>Register</h1>
            </div>
            <p align="center">
            <h2 id="user">Username</h2>
            <input id="userInput"  name='username'
            value={this.state.credentials.username}
            onChange={this.inputChanged}></input>
            
            </p>
            
            {/* <p align="center">
            <h2 id="user">Firstname</h2>
            <input id="userInput"  name='firstname' ></input>
            
            </p>
            <p align="center">
            <h2 id="user">Lastname</h2>
            <input id="userInput"  name='lastname' ></input>
        
            </p> */}

            <p align="center">
            <h2 id="user">Password</h2>
            <input  id="userInput" type="password" name='password' 
            // value={this.state.password} 
            // onChange={(event)=>this.handleChange(event)}
            value={this.state.credentials.password}
            onChange={this.inputChanged}
             ></input>
    
            </p>
            <p align="center">
            <h2 id="user">Confirm password</h2>
            <input id="userInput"  type="password" name='confirmPassword' 
            value={this.state.credentials.confirmPassword} 
             onChange={this.inputChanged}
  
              ></input>
        
            </p>
         
            <p align="center">
            <Link><button onClick={this.register} id="continue" >Signup</button></Link>
            
            </p>
        </div>
        {/* </div> */}
        </div>
        );
        
    }
    
}

export default signUpPage;
