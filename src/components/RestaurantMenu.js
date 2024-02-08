import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import NestedRestaurantCategory from "./NestedRestaurantCategory";
import { useState } from "react";
const RestaurantMenu=()=>{
    const {resId} = useParams()
    const resInfo=useRestaurantMenu(resId)

    const [isVeg,setIsVeg]=useState(false)


    if (resInfo===null){
        return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage,areaName,sla,avgRating,totalRatingsString,feeDetails}=resInfo?.cards[0]?.card?.card?.info
    const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    const nestedCategories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")


    

    
    return(
        <div className="menu w-8/12 mx-[auto] my-10">
            <div className="flex justify-between my-4">
                <div className="resTitleSection w-9/12">
                    <p className=" font-bold text-xl">{name}</p>
                    <p className=" text-sm">{cuisines.join(",")}</p>
                    <p className=" text-sm">{areaName}, {sla.lastMileTravelString}</p>
                </div>
                <div className="ratingSection w-1/12 border border-solid">
                    <div className=" text-green-700 h-[50%] flex items-center gap-1 justify-center"><span className="fa fa-star"></span> {avgRating}</div>
                    <hr className=" w-[90%] m-[auto]"></hr>
                    <div className="text-xs h-[50%] flex items-center justify-center"> {totalRatingsString}</div>
                </div>
            </div>

            <div className="delivery-fee flex items-center gap-1 text-sm my-4">
                <div><img src={CDN_URL+feeDetails.icon} width="20px"></img></div>
                <div>{feeDetails.message}</div>
            </div>
            <hr/>
            <div className="deliveryTimeCost flex gap-4 font-bold my-4">
                <div className="deliveryTime flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" strokeWidth="1.3">
                        </circle>
                        <path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path>
                    </svg> 
                    <div>{sla.slaString}</div>
                </div>
                <div className="costOfTwo flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <circle cx="9" cy="9" r="8.25" stroke="#3E4152" strokeWidth="1.5">
                        </circle>
                        <path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152">
                        </path>
                    </svg>
                    <div>{costForTwoMessage}</div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span>Veg Only</span>
                
                <button className={isVeg?" bg-green-300 p-1 rounded-lg":" bg-red-400 p-1 rounded-lg"} onClick={()=>{
                    setIsVeg(!isVeg)
                    }}>{isVeg?"ON":"OFF"}</button>
                

            
            </div>
            <div>
                {categories.map((category)=>(
                    <RestaurantCategory key={category.card.card.title} data={category?.card?.card} vegSelected={isVeg}/>
                ))}
            </div>
            <div>
                {nestedCategories.map((nestedCategory)=>(
                    <NestedRestaurantCategory key={nestedCategory.card.card.title} nestData={nestedCategory?.card?.card} vegSelected={isVeg} />
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu