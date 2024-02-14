import { createSlice,current } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        countEachItem:{}
    },
    reducers:{
        addItem: (state,action)=>{
            
            // state.items.push(action.payload)
            if(state.items.map((item)=>item.card.info.id).includes(action.payload.card.info.id)){
                state.countEachItem[action.payload.card.info.id]+=1
            }
            else{
                state.items.push(action.payload)
                state.countEachItem[action.payload.card.info.id]=1
            }
        },
        removeItem:(state,action)=>{
            // const itemIndex = state.items.map((item)=>item.card.info.id).indexOf(action.payload.card.info.id)
            
            // state.items.splice(itemIndex,1)
            if(state.items.map((item)=>item.card.info.id).includes(action.payload.card.info.id)){
                if(state.countEachItem[action.payload.card.info.id]===1){
                    delete state.countEachItem[action.payload.card.info.id]
                    const itemIndex = state.items.map((item)=>item.card.info.id).indexOf(action.payload.card.info.id)
                    state.items.splice(itemIndex,1)
                    
                }
                else{
                    state.countEachItem[action.payload.card.info.id]-=1
                }
            }
        },
        clearCart:(state)=>{
            state.items.length=0
            for(const key in state.countEachItem){
                delete state.countEachItem[key]
                
            }
        }

    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions

export default cartSlice.reducer