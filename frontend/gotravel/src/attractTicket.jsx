import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';
import axios from 'axios';

import attract from "./promo/attract.png"
import p1 from "./promo/P1.png"
import p2 from "./promo/P2.png"
import p3 from "./promo/P3.png"
import p5 from "./promo/P5.png"
import p6 from "./promo/P6.png"
import p7 from "./promo/P7.png"
import p8 from "./promo/P8.png"
import p9 from "./promo/P9.png"
import p10 from "./promo/p10.png"
import p11 from "./promo/p11.png"
import p12 from "./promo/p12.png"
import p13 from "./promo/p13.png"
import p14 from "./promo/p14.png"
import p15 from "./promo/p15.png"
import p16 from "./promo/p16.png"
import p17 from "./promo/p17.png"
import p18 from "./promo/p18.png"
import p19 from "./promo/p19.png"
import p20 from "./promo/p20.png"
import {attractTicketURL,addToCartURL} from './constants'
import { authAxios } from './utils';

class attractTicket extends Component {

    state={
        loading:false,
        error:null,
        data:[]
    }

    componentDidMount(){
        this.setState({loading:true})
        axios
        .get(attractTicketURL)
        .then(res=>{
            console.log(res.data)
            this.setState({data: res.data,loading:false})
        })
        .catch(err=>{
            this.setState({error:err,loading:false})
        })
    }

    handleAddToCart=slug=>{
        this.setState({loading:true})
        authAxios
        // axios
        .post(addToCartURL,{slug})
        .then(res=>{
            console.log(res.data)
            //update cart count
            this.setState({loading:false})
        })
        .catch(err=>{
            this.setState({error:err,loading:false})
        })
    }

    render() { 
        const {data,error,loading} =this.state;
        return (
        <div>
            {error && alert(JSON.stringify(error))}
             <NavbarMain />
        <div class="topBanner" >
        </div>
        
         <div id="bgAttract">
         <br></br>
        <div id="attract" class="register-header">
            <img src={attract} width="60" height="60" ></img>
            <h1 align="center"> Attraction tickets</h1>
        </div>
        

        <div  id="placePromo" >
        <br></br>
        {data.map(item => {
            return  <div  key={item.id}>
            <h3 >{item.title}</h3>
            <div>
            <img  src={item.image} class="promoImg"  ></img>
            <button align ="right" class="ticket" onClick={()=>this.handleAddToCart(item.slug)}>Add to cart </button>
            </div>
            </div>
              })}
        </div>
      
        {/* <div id="placePromo">
            <br></br>
            <h3 align="center">SAFARI WORLD</h3>
            <div align="center" >
                <img src={p1} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket </a>
                <img src={p2} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket </a>
                <img src={p3} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
            </div>
            
        </div>
    
        <div id="placePromo">
            <br></br>
            <h3 align="center">VANA NAVA WATER JUNGLE</h3>
            <div align="center">
                <img src={p5} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={p6} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={p7} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={p8} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={p9} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>

            </div>
        </div>

        <div id="placePromo">
            <br></br>
            <h3 align="center">PATTAYA SHEEP FARM</h3>
            <div align="center">
                <img src={p10} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={p11} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={p12} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={p13} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
    

            </div>
        </div>

        <div id="placePromo">
            <br></br>
            <h3 align="center">PATTAYA DOLPHINARIUM</h3>
            <div align="center">
                <img src={p14} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={p15} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={p16} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={p17} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={p18} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={p19} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>
                <img src={p20} class="promoImg"  ></img>
                <a class="ticket" href="#"> Buy ticket  </a>

            </div>
        </div> */}


        </div>
        </div>

   
       
        
        );
    }
}
export default attractTicket;
