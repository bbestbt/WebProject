import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';

class food4 extends Component {

    render() {
        return (
            <div>
                {/* <NavbarMain /> */}
                <div class="topBanner" >
                </div >
                <br></br>
                <h2 align="center">Kagonoya Premium Shabu</h2>
                <div class="responsive">
                    <div class="gallery">
                    <img src="https://img.wongnai.com/p/1920x0/2020/05/25/8e4db61c237347b599cd9f55a2236ca0.jpg" width="600" height="400"  ></img>
                        <div class="desc"> Standard Shabu Shabu</div>
                    </div>

                </div>

                <div class="responsive">
                    <div class="gallery">
                    <img src="https://img.wongnai.com/p/1920x0/2020/05/25/8e4db61c237347b599cd9f55a2236ca0.jpg" width="600" height="400"  ></img>
                        <div class="desc">Premium Shabu Shabu</div>
                    </div>

                </div>

                <div class="responsive">
                    <div class="gallery">
                    <img src="https://img.wongnai.com/p/1920x0/2020/05/25/8e4db61c237347b599cd9f55a2236ca0.jpg" width="600" height="400"  ></img>
                        <div class="desc"> Platinum Kagonoya Shabu Shabu</div>
                    </div>

                </div>

                <div class="responsive">
                    <div class="gallery">
                    <img src="https://img.wongnai.com/p/1920x0/2020/05/25/8e4db61c237347b599cd9f55a2236ca0.jpg" width="600" height="400"  ></img>
                        <div class="desc"> [Splittable - Buy 4+ Discount 10%] Standard Shabu Shabu</div>
                    </div>

                </div>

                <div class="responsive">
                    <div class="gallery">
                    <img src="https://img.wongnai.com/p/1920x0/2020/05/25/8e4db61c237347b599cd9f55a2236ca0.jpg" width="600" height="400"  ></img>
                        <div class="desc"> [Splittable - Buy 4+ Discount 13%] Premium Shabu Shabu</div>
                    </div>

                </div>

                <div class="responsive">
                    <div class="gallery">
                    <img src="https://img.wongnai.com/p/1920x0/2020/05/25/8e4db61c237347b599cd9f55a2236ca0.jpg" width="600" height="400"  ></img>
                        <div class="desc"> [Splittable - Buy 4+ Discount 15%] Platinum Shabu Shabu</div>
                    </div>

                </div>




            </div>



        );



    }
}
export default food4;
