import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import attract from "./promo/attract.png"
import {attractTicketURL,addToCartURL} from './constants'
import { authAxios } from './utils';
import { addToCart } from './actions/cartActions'
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

    // handleAddToCart=slug=>{
    //     this.setState({loading:true})
    //     authAxios
    //     // axios
    //     .post(addToCartURL,{slug})
    //     .then(res=>{
    //         console.log(res.data)
    //         //update cart count
    //         this.setState({loading:false})
    //     })
    //     .catch(err=>{
    //         this.setState({error:err,loading:false})
    //     })
    // }

    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render() { 
        const {data,error,loading} =this.state;
        return (
        <div>
            {/* {error && alert(JSON.stringify(error))} */}
             {/* <NavbarMain /> */}
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
            <button align ="right" class="ticket"  onClick={()=>{this.handleClick(item.id)}}>Add to cart </button>
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
// export default attractTicket;
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(attractTicket)
