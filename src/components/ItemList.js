import { CDN_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"
const ItemList=({items})=>{
    // console.log(items)
    const dispatch =useDispatch()
    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }
    return (
    <div>
        {items.map((item)=>(
            <div data-testid="foodItems" key={item.card.info.id} className="m-2 p-2 border-b-2 border-gray-200 flex justify-between">
                <div className="w-10/12">
                    <div>
                        {item.card.info.itemAttribute.vegClassifier==="VEG"?"🟢":"🔴"}
                    </div>
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {(item.card.info.price||item.card.info.defaultPrice)/100}</span>
                    </div>
                    <p className=" text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-2/12">
                   
                    <div className="absolute">
                        <button className="py-2 bg-black text-white shadow-lg rounded-lg px-8 mx-5" onClick={()=>handleAddItem(item)}>Add +</button>
                    </div>
                    <img src={CDN_URL+item.card.info.imageId} />
                </div>
                    


                
            </div>
        ))}
    </div>
    )
}

export default ItemList