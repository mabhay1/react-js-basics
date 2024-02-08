import RestaurantCategory from "./RestaurantCategory"

const NestedRestaurantCategory=({nestData,vegSelected})=>{
    console.log(nestData)
    let hasCategories=true
    if(vegSelected===true){
        hasCategories=false
        nestData.categories.forEach((category)=>{
            if(category.itemCards.filter((itemCard)=>itemCard.card.info.itemAttribute.vegClassifier==='VEG').length!=0){
                hasCategories=true
            }
        })
    }

    if(hasCategories===true){
        return (
            <div className=" bg-gray-50 shadow-lg my-4 p-4">
                {/* Accordian Header */}
                <div className=" flex justify-between cursor-pointer">
                    <span className=" font-bold text-lg">{nestData.title} </span>
                </div>
                {/* Accordian Body */}
                <div>
                    {nestData.categories.map((category)=>(
                        <RestaurantCategory key={category.title} data={category} vegSelected={vegSelected}/>
                    ))}
                </div>
            </div>
                
        )
    }


}

export default NestedRestaurantCategory