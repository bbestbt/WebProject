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
// import up from "./up.png"
// import down from "./down.png"
import {Button} from 'reactstrap'
// import "./App.css"


import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'


class Cart extends Component {

    constructor(props){
        super(props)
        this.data=[]
        const {title, image, price} = this.props.location.state.property_id;
        console.log( title )
        console.log( image )
        console.log( price )
        this.title = title
        this.image = image
        this.price = price
    }

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

    click = () => {
        
        console.log(this.data)
        axios
          .post("http://127.0.0.1:8000/api/carts/", {
           title: this.title,
           price: this.price,
           
          })
          .then(() => {
            // console.log("response: ", response);
           
          })
          .catch((err) => {
            console.error(err); 
          });
        window.location.href="/home"  
        alert("Confirmation Complete")
    };

    render() {
        return (
            
            <div id = "bgHotel">
                <div class="topBanner" >
                </div>
                <div id="hotel" class="register-header">
                <img src={cart} width="60" height="60" ></img>
                <h1 align="center">Cart</h1>
                </div>

                        <li id="placePromo" key={this.id}>
                            <div >
                                <img src={this.image} alt={this.image} class="promoImg" />
                            </div>

                            <div >
                                <span >{this.title}</span>
                                <p><b>Price: {this.price} Baht</b></p>
                                
                                {/* <div classname = "add-remove" align="center">
                                    <Link to="/cart"><Button><i  onClick={() => { this.handleAddQuantity(item.id) }}>Add</i></Button></Link> 
                                    <Link to="/cart"><Button><i  onClick={() => { this.handleSubtractQuantity(item.id) }}>Subtract</i></Button></Link>
                                </div> */}

                                {/* <button class="ticket" onClick={() => { this.handleRemove(item.id) }}>Remove</button> */}
                                <button class='confirm' onClick = {this.click}>
                                    Confirmation
                                </button>
                            </div>

                        </li>
            </div>
                    )
              

            // (
            //     <div>
            //         <br></br>
            //         <h5 align="center">Nothing</h5>
            //     </div>
            // )
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
                    {/* <ul >
                        {addedItems}
                    </ul> */}
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