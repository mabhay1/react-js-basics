import { useState,useEffect } from "react";
import { RESMENU_URL } from "../utils/constants"

const useRestaurantMenu = (resId) =>{
    const [resInfo,setResInfo]=useState(null)
    useEffect(()=>{
        fetchMenu()
    },[])
    const fetchMenu = async () => {
        const data = await fetch(RESMENU_URL+resId)
        const jsonData = await data.json()
        
        setResInfo(jsonData.data)
    }

    return resInfo
}

export default useRestaurantMenu