import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Recipe from './Recipe'


import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'




class Cart extends Component {

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render() { 
        return(
            <div>
                <NavbarMain />
                    <div class="topBanner" >
                    






                </div>

            </div>
        )
    }
}

export default Cart;