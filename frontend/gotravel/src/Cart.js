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
import cart from "./carts.png"

import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'




class Cart extends Component {

    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

    render() {
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (


                        <li id="placePromo" key={item.id}>
                            <div >
                                <img src={item.img} alt={item.img} class="promoImg" />
                            </div>

                            <div >
                                <span align="center">{item.title}</span>
                                <p align="center"><b>Price: {item.price} Baht</b></p>
                                <p align="center">
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <p align="center">
                                    <Link to="/cart"><b onClick={() => { this.handleAddQuantity(item.id) }}>+</b></Link> {" "} {" "}
                                    <Link to="/cart"><b onClick={() => { this.handleSubtractQuantity(item.id) }}>-</b></Link>
                                </p>
                                <p align="center">
                                    <button class="ticket"  onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                                </p>

                            </div>

                        </li>

                    )
                })
            ) :

            (
                <div>
                    <br></br>
                    <h5 align="center">Nothing</h5>
                </div>
            )
        return (

            <div>
                <div class="topBanner" >
                </div>

                <div id="bgAttract">
                    <br></br>
                    <div class="register-header" >
                        <img src={cart} width="60" height="60" ></img>
                        <h1 align="center">Order</h1>
                    </div>
                    <ul >
                        {addedItems}
                    </ul>
                    <Recipe />
                </div>

            </div>
        )
    }
}
// export default Cart;

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)