import React, { Component } from 'react';

import {
    
    Link, Redirect,
   
  } from 'react-router-dom';
import {hotelTicketURL,addToCartURL} from './constants'
import hotel from "./promo/hotel2.png"
import axios from 'axios';
import { authAxios } from './utils';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
class hotelTicket extends Component {
    state={
        loading:false,
        error:null,
        data:[],
        redirect:false,
        id:null,
    }
    //getapi
    componentDidMount(){
        this.setState({loading:true})
        axios
        .get(hotelTicketURL)
        .then(res=>{
            console.log(res.data)
            this.setState({data: res.data,loading:false})
        })
        .catch(err=>{
            this.setState({error:err,loading:false})
        })
    }
    //addtocartfunc
    click = (id)=>{
        console.log(id)
        this.props.addToCart(id);
        console.log(id)
        id = id -1
        console.log(this.state.data[id])
        this.setState({redirect: true});
        this.setState({id: (id)});
        
        // this.setState({})
        
    }

    render() { 
        
        const {data,error,loading} =this.state;
        return (
        
        <div>
            {this.state.redirect ? (
          <Redirect
            to={{
              pathname: "/cart",
              state: { property_id: this.state.data[this.state.id] },
            }}
          />
            ) : null} 
             
            <div class="topBanner" >
            </div>
        
         <div id="bgHotel">
         <br></br>
        <div id="hotel" class="register-header">
            <img src={hotel} width="60" height="60" ></img>
            <h1 align="center"> Hotel deal</h1>
        </div>
        <div id="placePromo">
        <br></br>
        {data.map(hotel => {
            //  console.log(hotel)
            return  <div align="center" key={hotel.id}>
               
                <div class="allHotel">
                    <img src={hotel.image} class="promoImg"></img>
                    <h4 class="caption" >{hotel.title}</h4>
                    <h4 >Price : {hotel.price} Baht</h4>
                    <h5>Address : {hotel.address}</h5>
                    <h5>Phone : {hotel.phone}</h5>
                    <h5>Website : {hotel.website}</h5>

                    <button id="jui" className="ticket" onClick={() => {this.click(hotel.id)}} >Add to cart</button>

                    {/* <button class="ticket" 
                    onClick={()=>{this.handleClick(hotel.id)}}
                >Add to cart </button> */}
                </div>
                
            <div>
                
   
           
            </div>
            </div>
              })}
              </div>

        </div>
        </div>

   
       
        
        );
    }
}
// export default hotelTicket;
const mapStateToProps = (state)=>{
    return {
        data: state.data
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(hotelTicket)
