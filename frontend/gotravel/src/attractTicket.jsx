import React, { Component } from 'react';

import {
    Redirect,
  } from 'react-router-dom';
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
        data:[],
        redirect:false,
        id:null,
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
            <button align ="right" class="ticket"  onClick={this.handleClick}
            onClick={() => {this.click(item.id)}}
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