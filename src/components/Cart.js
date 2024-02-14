import { useDispatch, useSelector } from "react-redux"

import { clearCart,addItem,removeItem } from "../utils/cartSlice"
import { CDN_URL } from "../utils/constants"

const Cart = () =>{
    const cartItems=useSelector((store)=>store.cart.items)
    const countEachCartItem=useSelector((store)=>store.cart.countEachItem)
    let totalItems=0
    for(key in countEachCartItem){
        totalItems+=countEachCartItem[key]
    }
    const dispatch=useDispatch()
    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    const handleRemoveItem=(item)=>{
        dispatch(removeItem(item))
        
    }

    const totalPrice=cartItems.reduce((price,carts)=>{
        
        return price+countEachCartItem[carts.card.info.id]*(carts.card.info.price||carts.card.info.defaultPrice)/100
    },0)
    console.log(totalPrice)
    return(
        <div className=" w-6/12 mx-auto my-4 p-4">
            <div className=" flex justify-between items-center">
                <h1 className=" text-2xl font-bold text-center">Cart</h1>
                <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            </div>
            
            

            {cartItems.length===0 ? <h3>Your Cart is empty</h3>:(    
            <div>
                <div>Total Price: ₹ {totalPrice}</div>
                <div>Total items: {totalItems}</div>
                {cartItems.map((item)=>(
                    <div key={item.card.info.id} className=" my-2 py-2 border-b-2 border-gray-500 flex justify-between">
                    <div className="w-10/12">

                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {(countEachCartItem[item.card.info.id])*(item.card.info.price||item.card.info.defaultPrice)/100}</span>
                        </div>
                        <div className=" my-3 py-2 flex border border-black w-[20%] items-center text-2xl bg-red-100">
                            <button className=" w-[30%]" onClick={()=>handleAddItem(item)}>+</button>
                            <div className=" w-[40%] text-center">{countEachCartItem[item.card.info.id]}</div>
                            <button className=" w-[30%]" onClick={()=>handleRemoveItem(item)}>-</button>
                        </div>
                    </div>
                    <div className="w-2/12">
                        <img src={CDN_URL+item.card.info.imageId} />
                    </div>                                    
            </div>

        ))}
    </div>)}
            
        </div>
    )
}

export default Cart