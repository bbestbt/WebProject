import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import food from "./promo/food.png"
import {foodTicketURL,addToCartURL} from './constants'
import { authAxios } from './utils';
import axios from 'axios';
import {
    Redirect,
  } from 'react-router-dom';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
class foodTicket extends Component {
    state={
        loading:false,
        error:null,
        data:[],
        redirect:false,
        id:null,
    }

    componentDidMount(){
        this.setState({loading:true})
        axios
        .get(foodTicketURL)
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

    // handleClick = (id)=>{
    //     this.props.addToCart(id); 
    // }
    click = (id)=>{
        console.log(id)
        this.props.addToCart(id);
        console.log(id)
        id = id -1
        console.log(this.state.data[id])
        this.setState({redirect: true});
        this.setState({id: (id)});
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
                {/* <NavbarMain /> */}
                <div class="topBanner" >
                </div>

                <div id="bgFood">
                    <br></br>
                    <div id="food" class="register-header">
                        <img src={food} width="60" height="60" ></img>
                        <h1 align="center">Restaurant discount</h1>
                    </div>

                    <div id="placePromo">
                        <br></br>
                        {data.map(food => {
                       return  <div align="center" key={food.id} >
                            <div class="allHotel">
                                <img src={food.image} class="promoImg"  ></img>
                                <h4 class="caption" >{food.title}</h4>
                                <h6 class="caption">{food.promo}</h6>
                                <h4 class="caption">{food.price} Baht</h4>
                                <button align ="right" class="ticket"  onClick={this.handleClick}
                                 onClick={() => {this.click(food.id)}}
                                 >Add to cart </button>
                            </div>
                            
                    </div>
                        })}
                        
                </div>
            </div>

        </div>


        );
        
    }
}
// export default foodTicket;
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

export default connect(mapStateToProps,mapDispatchToProps)(foodTicket)