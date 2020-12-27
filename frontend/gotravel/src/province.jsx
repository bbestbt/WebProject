import React, { Component } from 'react';

import {
    
    Link,
   
} from 'react-router-dom';

class province extends Component {

    render() {
        return (
            <div>
            
                <div align="center">
                <Link to="/north"><div class="zoom2"><span id="bgText">North</span></div></Link>
                <Link to="/central"><div class="zoom3"><span id="bgText">Central</span></div></Link>
                <Link to="/northeast"><div class="zoom6"><span id="bgText">Northeast</span></div></Link>
                <Link to="/east"><div class="zoom4"><span id="bgText">East</span></div></Link>
                <Link to="/south"><div class="zoom5"><span id="bgText">South</span></div></Link>
                <Link to="/west"><div class="zoom"><span id="bgText">West</span></div></Link>
                    
                </div>

            </div>

        );
    }
}
export default province;
