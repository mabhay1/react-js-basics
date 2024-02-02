import InfiniteScroll from "react-infinite-scroller";
import { useState,useEffect } from "react";
import restaurantsArray from "../utils/mockData";
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";
const style={
    border:"1px solid black"
}
const ResCardInfiniteScroll= ()=>{
    const [data,setData] = useState([])
    const [newData,setNewData] = useState([])
    useEffect(()=>{
        fetchData()},[])
    const fetchData = async () => {
        const data1 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6369411&lng=77.2056647&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data1.json()
        if(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setData(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            
        }
        else if(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setData(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setData(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setData(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        
    }
    const fetchMore=async()=>{
        // setTimeout(()=>setData([...data,...restaurantsArray]),2000)
        const data2 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6369411&lng=77.2056647&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data2.json()
        if(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setNewData(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            
            
        }
        else if(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setNewData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setNewData(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setNewData(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setNewData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setNewData(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        setData(data.concat(newData))
    }
    console.log(data)

    return data.length===0?<Shimmer/>:(

<InfiniteScroll className="res-containerIF" hasMore={true} loadMore={fetchMore} loader={<Shimmer/>}>
{data.map((restaurant,index)=><RestaurantCard key={index} resData={restaurant} />)}
</InfiniteScroll>


    )
}
export default ResCardInfiniteScroll