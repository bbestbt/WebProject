import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
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
        data:[]
    }

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
             {/* <NavbarMain /> */}
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
            return  <div align="center" key={hotel.id}>
                <div class="allHotel">
                    <img src={hotel.image} class="promoImg"  ></img>
                    <h4 class="caption" >{hotel.title}</h4>
                    <h4 >Price : {hotel.price} Baht</h4>
                    <h5>Address : {hotel.address}</h5>
                    <h5>Phone : {hotel.phone}</h5>
                    <h5>Website : {hotel.website}</h5>
                    <button class="ticket" 
                onClick={()=>{this.handleClick(hotel.id)}}
                >Add to cart </button>
                </div>
                
            <div>
                
   
           
            </div>
            </div>
              })}
              </div>
     
        
        {/* <div id="placePromo">
            <br></br>
            <div align="center" >
                <div class="allHotel">
                    <Link to="/hotel1"> <img src={h1} class="promoImg"  ></img></Link>
                    <h4 class="caption" >El barrio lanna hotel</h4>
                </div>

                <div class="allHotel">
                    <Link to="/hotel2"> <img src="https://media-cdn.tripadvisor.com/media/photo-o/11/26/fc/ad/rainforest-boutique.jpg" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Rainforest Chiangmai Hotel</h4>
                </div>

                <div class="allHotel">
                    <Link to="/hotel3"> <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/18/12/21/10/panan-krabi-resort.jpg" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Panan Krabi Resort</h4>
                </div>
                
                <div class="allHotel">
                    <Link to="/hotel4"> <img src="https://media-cdn.tripadvisor.com/media/photo-o/0e/e5/0d/c3/d-varee-diva-central.jpg" class="promoImg"  ></img></Link>
                    <h4 class="caption" >D Varee Diva Central Rayong</h4>
                </div>

                <div class="allHotel">
                    <Link to="/hotel5"> <img src="https://media-cdn.tripadvisor.com/media/photo-o/15/d8/ea/7a/natee-the-riverfront.jpg" class="promoImg"  ></img></Link>
                    <h4 class="caption" >Natee The Riverfront Hotel</h4>
                </div>
                
                <div class="allHotel">
                    <Link to="/hotel6"> <img src="https://media-cdn.tripadvisor.com/media/photo-o/0e/86/48/a8/bluesotel-krabi-ao-nang.jpg" class="promoImg"  ></img></Link>
                    <h4 class="caption" >BlueSotel Krabi</h4>
                </div>

                    
            </div> */}
            
        {/* </div> */}
    
       


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
