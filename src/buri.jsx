import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';

class buri extends Component {

    render() {  
        return (
        <div>
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgNE">
         <br></br>
        <div id="provinceName">
            <h1 align="center">Buri Ram</h1>
        </div>

        <div class="placeProvince">
        <Link to="/buri1"> <img src="https://www.thailandee.com/img/image?v=2&a=u3LnbCLSd1Hv2TUVmPKrDROeLT%3DMEqJeLyUVMu-tp0A12DHfLA-tp0A12DHfLkuqpDGh25UfLvMharSjMyMrERHq2TB32Rm6axs-ERHKJTV02wGrXvSuLy-9mvYtLD41JDYx2TOFmPKqYk-rLyOPpT-rX0B1%3DTI9mvutJyVv2TANmPevpTUxJk-rM5V6Jkm6Jvg9M5AO" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Klan Tharam</h6>    
        </div>
    
        <div class="placeProvince">
        <Link to="/buri2"> <img src="https://thailandtourismdirectory.go.th/th/file/get/file/20171121b6da0d22e244c8f42e239e2b97b58541083931.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Buriram Castle</h6>    
        </div>

        <div class="placeProvince">
        <Link to="/buri3"> <img src="https://temple-thai.com/wp-content/uploads/2018/03/wat-pa-khao-noi-5.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Wat Pa Khao Noi</h6>                
        </div>


        <div class="placeProvince">
        <Link to="/buri4"> <img src="https://www.asiatravelgate.com/wp-content/uploads/2017/09/Khao-Kradong-Forest-Park-Buriram-Thailand-001.jpg" class="allPlace" ></img></Link>
            <br></br>
            <br></br>
            <h6 align="center">Khao Kradong Forest Park</h6>    
        </div>

        </div>
        </div>


        );
    }
}
 
export default buri;
