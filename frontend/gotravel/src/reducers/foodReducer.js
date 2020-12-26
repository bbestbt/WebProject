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


const initState = {
    foodItems: [
        {id:1,title:'f1', desc: ".", price:2550,img:Item1},
        {id:2,title:'f2', desc: ".", price:1950,img: Item2},
        // {id:3,title:'SAFARI WORLD', desc: ".",price:720,img: Item3},
        // {id:4,title:'VANA NAVA WATER JUNGLE', desc: ".", price:950,img: Item4},
        // {id:5,title:'VANA NAVA WATER JUNGLE', desc: ".",price:590,img: Item5},
        // {id:6,title:'VANA NAVA WATER JUNGLE', desc: ".", price:1350,img: Item6},
        // {id:7,title:'VANA NAVA WATER JUNGLE', desc: ".",price:2890,img: Item7},
        // {id:8,title:'VANA NAVA WATER JUNGLE', desc: ".", price:5200,img: Item8},
        // {id:9,title:'PATTAYA SHEEP FARM', desc: ".", price:70,img: Item9},
        // {id:10,title:'PATTAYA SHEEP FARM', desc: ".", price:200,img: Item10},
        // {id:11,title:'PATTAYA SHEEP FARM', desc: ".", price:140,img: Item11},
       
        // {id:18,title:'',desc: ".",price:578, img: Item18},
    ],
    foodAddedItems:[],
    total: 0

}
const foodReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let foodAddedItems = state.foodItems.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.foodAddedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            foodAddedItems.quantity += 1 
             return{
                ...state,
                 total: state.total + foodAddedItems.price 
                  }
        }
         else{
            foodAddedItems.quantity = 1;
            //calculating the total
            let newTotal = state.total + foodAddedItems.price 
            
            return{
                ...state,
                foodAddedItems: [...state.foodAddedItems, foodAddedItems],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.foodAddedItems.find(item=> action.id === item.id)
        let new_items = state.foodAddedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            foodAddedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let foodAddedItems = state.foodItems.find(item=> item.id === action.id)
        foodAddedItems.quantity += 1 
          let newTotal = state.total + foodAddedItems.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let foodAddedItems = state.foodItems.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.foodAddedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - foodAddedItems.price
            return{
                ...state,
                foodAddedItems: new_items,
                total: newTotal
            }
        }
        else {
            foodAddedItems.quantity -= 1
            let newTotal = state.total - foodAddedItems.price
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
