import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory=({data,vegSelected,showItems,categoryTitle,setShowCategoryTitle,setShowCategoryTitleNull})=>{


    const handleClick = ()=>{

        
        if(data.title===categoryTitle){
            
            setShowCategoryTitleNull()
        }
        else{
            setShowCategoryTitle()
        }
        
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
                    <span>{showItems?"🔼":"🔽"}</span>
                </div>
                {/* Accordian Body */}
                {showItems && <ItemList items={items} /> }
            </div>
              
        )
    }


}

export default RestaurantCategory