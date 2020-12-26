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


const HotelState = {
    hotelitems: [
        {id:1,title:'f1', desc: ".", price:2550,img:Item1},
        {id:2,title:'f2', desc: ".", price:1950,img: Item2},

    ],
    hoteladdedItems:[],
    total: 0

}
const foodReducer= (state = HotelState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let hoteladdedItem = state.hotelitems.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.hoteladdedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            hoteladdedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + hoteladdedItem.price 
                  }
        }
         else{
            hoteladdedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + hoteladdedItem.price 
            
            return{
                ...state,
                hoteladdedItems: [...state.hoteladdedItems, hoteladdedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.hoteladdedItems.find(item=> action.id === item.id)
        let new_hotelitems = state.hoteladdedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            hoteladdedItems: new_hotelitems,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let hoteladdedItem = state.hotelitems.find(item=> item.id === action.id)
        hoteladdedItem.quantity += 1 
          let newTotal = state.total + hoteladdedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let hoteladdedItem = state.hotelitems.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(hoteladdedItem.quantity === 1){
            let new_hotelitems = state.hoteladdedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - hoteladdedItem.price
            return{
                ...state,
                hoteladdedItems: new_hotelitems,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
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

export default foodReducer
