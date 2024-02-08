import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory=({data,vegSelected})=>{

    const [showItems,setShowItems] = useState(false)

    const handleClick = ()=>{
        setShowItems(!showItems)
    }
    if(vegSelected===true){
        items=data.itemCards.filter((itemCard)=>itemCard.card.info.itemAttribute.vegClassifier==='VEG')
    }
    else{
        items=data.itemCards
        
    }
    if(items.length!=0){
        return (
            <div className=" bg-gray-50 shadow-lg my-4 p-4">
                {/* Accordian Header */}
                <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className=" font-bold text-lg">{data.title} ({items.length})</span>
                    <span>⬇️</span>
                </div>
                {/* Accordian Body */}
                {showItems && <ItemList items={items} /> }
            </div>
              
        )
    }


}

export default RestaurantCategory