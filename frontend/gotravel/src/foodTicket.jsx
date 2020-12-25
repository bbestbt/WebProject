import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
} from 'react-router-dom';
import food from "./promo/food.png"
import {foodTicketURL,addToCartURL} from './constants'
import { authAxios } from './utils';
import axios from 'axios';
class foodTicket extends Component {
    state={
        loading:false,
        error:null,
        data:[]
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
                                <button align ="right" class="ticket" onClick={()=>this.handleAddToCart(food.slug)}>Add to cart </button>
                            </div>
                            
                            </div>
                             })}
                        
                            

                    {/* <div id="placePromo">
                        <br></br>
                        <div align="center" >
                            <div class="allHotel">
                                <Link to="/food1"> <img src="https://resource.nationtv.tv/photo_news/2018/09/21/1024_76h85hi66bfg7ae8dgd8a.jpg" class="promoImg"  ></img></Link>
                                <h4 class="caption" >You&I Premium Suki Buffet</h4>
                            </div>

                            <div class="allHotel">
                                <Link to="/food2"> <img src="https://img.wongnai.com/p/1920x0/2018/08/29/2c0fa01b619c417e9033590089ffffb8.jpg" class="promoImg"  ></img></Link>
                                <h4 class="caption" >AKIYOSHI</h4>
                            </div>

                            <div class="allHotel">
                                <Link to="/food3"> <img src="https://www.makalius.co.th/wp-content/post-images/186131-post/neta-grill-850-net-1429.jpg" class="promoImg"  ></img></Link>
                                <h4 class="caption" >Neta Grill Buffet</h4>
                            </div>

                            <div class="allHotel">
                                <Link to="/food4"> <img src="https://img.wongnai.com/p/1920x0/2020/05/25/8e4db61c237347b599cd9f55a2236ca0.jpg" class="promoImg"  ></img></Link>
                                <h4 class="caption" >Kagonoya Premium Shabu</h4>
                            </div>


                            <div class="allHotel">
                                <Link to="/food5"> <img src="https://cdn.eatigo.com/eatigo_MoMoCafeMarriottSathornVista_20180313120229_3198.jpg" class="promoImg"  ></img></Link>
                                <h4 class="caption" >MoMo Cafe</h4>
                            </div>


                        </div>
                    </div> */}
                </div>
            </div>

</div>


        );
        
    }
}
export default foodTicket;
