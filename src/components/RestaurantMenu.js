import { useState,useEffect } from "react"
import { RESMENU_URL } from "../utils/constants"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
const RestaurantMenu=()=>{
    const [resInfo,setResInfo]=useState(null)
    const {resId} = useParams()
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const data = await fetch(RESMENU_URL+resId)
        const jsonData = await data.json()
        // console.log(jsonData.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
        setResInfo(jsonData.data)
    }

    if (resInfo===null){
        return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info
    const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}- {costForTwoMessage}</h2>
            <ul>
                {
                itemCards?.map((restaurant)=><li id={restaurant.card.info.id}>{restaurant.card.info.name}</li>)
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu