import Axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'
class Recipe extends Component {

    // componentWillUnmount() {
    //     if (this.refs.shipping.checked)
    //         this.props.substractShipping()
    // }

    // handleChecked = (e) => {
    //     if (e.target.checked) {
    //         this.props.addShipping();
    //     }
    //     else {
    //         this.props.substractShipping();
    //     }
    // }

   
    render() {

        return (
            <div id="bgAttract">
                <div align="right">
                    {/* <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li> */}
                    <h5 ><b>Total: {this.props.total} Baht</b></h5>


                    <button class="ticket" onClick={this.handleClick} >Checkout</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
