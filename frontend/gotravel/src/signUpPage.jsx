import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';



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


    // checkPassword() {
    //      if(!this.state.password || this.state.password != this.state.confirmPassword) {
    //         // this.setState({password_has_error:true});
    //         alert("password not match")
    //     }
    //     else {
    //         // this.setState({password_has_error:false});
    //     }
    // }

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
        <div class="topBanner" >
            { <img src={require("./loco.png")} alt="loco"></img> }
        </div>
        {/* <div id="bgRegis"> */}
        <br></br>
        <br></br>
        
        <div id="info">
           
            <div class= "register-header">  
                <img src={require("./regis.png")} alt="register"  width="30" height="40" class="register" ></img>
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
            // value={this.state.confirmPassword} 
            // onChange={(event)=>this.handleChange(event)}
  
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
