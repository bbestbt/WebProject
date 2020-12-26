import Item1 from '../images/P1.png'
import Item2 from '../images/P2.png'
import Item3 from '../images/P3.png'
import Item4 from '../images/P5.png'
import Item5 from '../images/P6.png'
import Item6 from '../images/P7.png'
import Item7 from '../images/P8.png'
import Item8 from '../images/P9.png'
import Item9 from '../images/p10.png'
import Item10 from '../images/p11.png'
import Item11 from '../images/p12.png'
import Item12 from '../images/p13.png'
import Item13 from '../images/p14.png'
import Item14 from '../images/p15.png'
import Item15 from '../images/p16.png'
import Item16 from '../images/p17.png'
import Item17 from '../images/p18.png'
import Item18 from '../images/p20.jpg'


import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const hotelState = {
    fooditems: [
        {id:1,title:'h1', desc: ".", price:2550,img:Item1},
        {id:2,title:'h2', desc: ".", price:1950,img: Item2},
      
        // {id:18,title:'',desc: ".",price:578, img: Item18},
    ],
    foodaddedItems:[],
    total: 0

}
const hotelReducer= (state = hotelState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let foodaddedItem = state.fooditems.find(item=> item.id === action.id)
          //check if the action id exists in the foodaddedItems
         let existed_item= state.foodaddedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            foodaddedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + foodaddedItem.price 
                  }
        }
         else{
            foodaddedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + foodaddedItem.price 
            
            return{
                ...state,
                foodaddedItems: [...state.foodaddedItems, foodaddedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.foodaddedItems.find(item=> action.id === item.id)
        let new_fooditems = state.foodaddedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            foodaddedItems: new_fooditems,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let foodaddedItem = state.fooditems.find(item=> item.id === action.id)
        foodaddedItem.quantity += 1 
          let newTotal = state.total + foodaddedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let foodaddedItem = state.fooditems.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(foodaddedItem.quantity === 1){
            let new_fooditems = state.foodaddedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - foodaddedItem.price
            return{
                ...state,
                foodaddedItems: new_fooditems,
                total: newTotal
            }
        }
        else {
            foodaddedItem.quantity -= 1
            let newTotal = state.total - foodaddedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default hotelReducer
