import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';

class food3 extends Component {

    render() {
        return (
            <div>
                {/* <NavbarMain /> */}
                <div class="topBanner" >
                </div >
                <br></br>
                <h2 align="center">Neta Grill Buffet</h2>
                <div class="responsive">
                    <div class="gallery">
                    <img src="https://www.makalius.co.th/wp-content/post-images/186131-post/neta-grill-850-net-1429.jpg" width="600" height="400"  ></img>
                        <div class="desc"> [Buy 4+ Discount 30%] Neta Exclusive Unlimited Foie Gras</div>
                    </div>

                </div>

                <div class="responsive">
                    <div class="gallery">
                    <img src="https://www.makalius.co.th/wp-content/post-images/186131-post/neta-grill-850-net-1429.jpg" width="600" height="400"  ></img>
                        <div class="desc"> [Buy 10 Get 1 Free] Neta Exclusive Unlimited Foie Gras</div>
                    </div>

                </div>

                <div class="responsive">
                    <div class="gallery">
                    <img src="https://www.makalius.co.th/wp-content/post-images/186131-post/neta-grill-850-net-1429.jpg" width="600" height="400"  ></img>
                        <div class="desc">Buffet S (Sea Prawn + Oyster + Australian Beef)</div>
                    </div>

                </div>

                <div class="responsive">
                    <div class="gallery">
                    <img src="https://www.makalius.co.th/wp-content/post-images/186131-post/neta-grill-850-net-1429.jpg" width="600" height="400"  ></img>
                        <div class="desc"> Buffet M (Salmon Sashimi + River Shrimp + Crab)</div>
                    </div>

                </div>

                <div class="responsive">
                    <div class="gallery">
                    <img src="https://www.makalius.co.th/wp-content/post-images/186131-post/neta-grill-850-net-1429.jpg" width="600" height="400"  ></img>
                        <div class="desc">Buffet L (A3 Wagyu + Jumbo Oyster + Unagi Sushi)</div>
                    </div>

                </div>

                <div class="responsive">
                    <div class="gallery">
                    <img src="https://www.makalius.co.th/wp-content/post-images/186131-post/neta-grill-850-net-1429.jpg" width="600" height="400"  ></img>
                        <div class="desc"> Buffet XL (A5 Wagyu + Hotate Sushi + Foie Gras Sushi + Beer Refill)</div>
                    </div>

                </div>

                


            </div>



        );



    }
}
export default food3;
