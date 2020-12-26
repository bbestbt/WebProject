import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";


import "bootstrap/dist/css/bootstrap.css";
// Add custom css import below this line
import "./index.css";

//test
import Home from "./pages/Home";
import Cart from './Cart';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './reducers/cartReducer';
import foodReducer from './reducers/foodReducer';
import hotelReducer from './reducers/hotelReducer';

// export default combineReducers({
//    foodReducer, 
//    hotelReducer,
//    cartReducer
// })

// const rootReducer = combineReducers({
//    cart:cartReducer,
//    food: foodReducer,
//    hotel: hotelReducer
// })

// const store = createStore(rootReducer);


const store = createStore(cartReducer);
    ReactDOM.render(
      <Provider store = {store}>
         <App/>
      </Provider>,
      document.getElementById('root')
);


//ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();