import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Phichit extends Component {

    render() {  
        return (
        <div>
             {/* <NavbarMain /> */}
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Phichit</h1>
        </div>

        <div align="center">

        <div class="placeProvince">
        <Link to="/Phichit1"> <img src="https://paknam.com/wp-content/uploads/2016/04/IMG_6821-1.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Crocodile Farm</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/Phichit2"> <img src="https://lh3.googleusercontent.com/proxy/pjf8KVhU3d_PqYzfkJctCviH2HOxl0kQ-COT4_ua9kBoRyh-MTZXKb8OEsH3giN7s3wSev7gCpgHs9fmkqQg1eS0JXFQMOsolq3c3mN_pZKHTdybYSlPUG4X" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Phichit Provincial Museum</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/Phichit3"> <img src="https://lh3.googleusercontent.com/proxy/80NTScKvqtNGCJQNWMaut7LzafwBM1ZXBPjVFt3hcDUwEi6fBg_9Vuh0PsHVI4EVDDpVyS23MQ1S1pXK8pCKnFc-gnhgIi4fyB-XHHN9Ix7Uew84mvok0iTCdo83AgJbQDzSkGnkvB4ETuO93cfZSZi0q7c" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Khao Rup Chang</h6>                
        </div>

        <div class="placeProvince">
        <Link to="/Phichit4"> <img src="https://www.thailandtourismdirectory.go.th/en/file/get/file/201710233a81b25a0e7418113410b38d72e27ee1010245.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Tham Chalawan</h6>    
        </div>
        </div>

        </div>
        </div>


        );
    }
}
 
export default Phichit;
