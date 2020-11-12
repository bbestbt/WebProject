import React, { Component } from 'react';
import NavbarMain from "./components/Navbar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';

class food5 extends Component {

    render() {
        return (
            <div>
                <NavbarMain />
                <div class="topBanner" >
                </div >
                <br></br>
                <h2 align="center">MoMo Cafe at Marriott Sathorn Vista</h2>
                <div class="responsive">
                    <div class="gallery">
                    <img src="https://cdn.eatigo.com/eatigo_MoMoCafeMarriottSathornVista_20180313120229_3198.jpg" width="600" height="400"  ></img>
                        <div class="desc"> 
                            <h6>Surf & Turf Dinner Buffet</h6>
                            ฿ 630 from  <del> ฿ 1,294</del>
                        </div>
                    </div>

                </div>

               





            </div>



        );



    }
}
export default food5;
